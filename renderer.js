document.addEventListener('DOMContentLoaded', () => {
  const btnBack = document.getElementById('btn-back')
  const btnFile = document.getElementById('btn-file')
  const btnFolder = document.getElementById('btn-folder')
  const filePathElement = document.getElementById('filePath')
  const folderPathElement = document.getElementById('folderPath')
  const fileSection = document.getElementById('file-section')
  const folderSection = document.getElementById('folder-section')
  const filesList = document.getElementById('filesList')
  let history = []
  let currentState = null

  function updateBackButton () {
    btnBack.disabled = history.length === 0
  }

  function restoreState (state) {
    if (!state) {
      return
    }

    currentState = state
    updateBackButton()

    if (state.type === 'file') {
      filePathElement.textContent = state.path
      fileSection.style.display = 'block'
      folderSection.style.display = 'none'
    } else if (state.type === 'folder') {
      folderPathElement.textContent = state.path
      fileSection.style.display = 'none'
      folderSection.style.display = 'block'
      window.electronAPI.listFiles(state.path)
        .then(files => displayFiles(files))
        .catch(error => {
          console.error('Erro ao restaurar pasta:', error)
          filesList.innerHTML = '<li>Erro ao recuperar arquivos da pasta.</li>'
        })
    }
  }

  function pushCurrentState () {
    if (currentState) {
      history.push(currentState)
      updateBackButton()
    }
  }

  btnBack.addEventListener('click', () => {
    if (history.length === 0) {
      return
    }

    const previousState = history.pop()
    restoreState(previousState)
  })

  // Abrir arquivo
  btnFile.addEventListener('click', async () => {
    try {
      if (!window.electronAPI || typeof window.electronAPI.openFile !== 'function') {
        throw new Error('electronAPI não disponível')
      }

      const filePath = await window.electronAPI.openFile()
      if (filePath) {
        pushCurrentState()
        currentState = { type: 'file', path: filePath }
        filePathElement.textContent = filePath
        fileSection.style.display = 'block'
        folderSection.style.display = 'none'
        await window.electronAPI.openFilePath(filePath)
      } else {
        filePathElement.textContent = 'Nenhum arquivo selecionado.'
      }
    } catch (error) {
      console.error('Erro ao abrir o arquivo:', error)
      filePathElement.textContent = 'Erro ao abrir o arquivo. Veja console.'
    }
  })

  // Abrir pasta
  btnFolder.addEventListener('click', async () => {
    try {
      if (!window.electronAPI || typeof window.electronAPI.openDirectory !== 'function') {
        throw new Error('electronAPI não disponível')
      }

      const dirPath = await window.electronAPI.openDirectory()
      if (dirPath) {
        pushCurrentState()
        currentState = { type: 'folder', path: dirPath }
        folderPathElement.textContent = dirPath
        fileSection.style.display = 'none'
        folderSection.style.display = 'block'
        
        // Listar arquivos da pasta
        const files = await window.electronAPI.listFiles(dirPath)
        displayFiles(files)
      } else {
        folderPathElement.textContent = 'Nenhuma pasta selecionada.'
      }
    } catch (error) {
      console.error('Erro ao abrir a pasta:', error)
      folderPathElement.textContent = 'Erro ao abrir a pasta. Veja console.'
    }
  })

  // Exibir arquivos da pasta
  function displayFiles (files, dirPath) {
    filesList.innerHTML = ''
    
    if (files.length === 0) {
      const li = document.createElement('li')
      li.textContent = 'Nenhum arquivo encontrado'
      filesList.appendChild(li)
      return
    }

    files.forEach(file => {
      const li = document.createElement('li')
      li.className = file.isDirectory ? 'folder' : 'file'
      li.textContent = file.name
      
      // Adicionar click listener para abrir arquivo
      if (!file.isDirectory) {
        li.addEventListener('click', async () => {
          try {
            await window.electronAPI.openFilePath(file.path)
          } catch (error) {
            console.error('Erro ao abrir arquivo:', error)
          }
        })
      }
      
      filesList.appendChild(li)
    })
  }
})