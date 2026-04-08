document.addEventListener('DOMContentLoaded', () => {
  const btnFile = document.getElementById('btn-file')
  const btnFolder = document.getElementById('btn-folder')
  const filePathElement = document.getElementById('filePath')
  const folderPathElement = document.getElementById('folderPath')
  const fileSection = document.getElementById('file-section')
  const folderSection = document.getElementById('folder-section')
  const filesList = document.getElementById('filesList')

  // Abrir arquivo
  btnFile.addEventListener('click', async () => {
    try {
      if (!window.electronAPI || typeof window.electronAPI.openFile !== 'function') {
        throw new Error('electronAPI não disponível')
      }

      const filePath = await window.electronAPI.openFile()
      if (filePath) {
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
        folderPathElement.textContent = dirPath
        fileSection.style.display = 'none'
        folderSection.style.display = 'block'
        
        // Listar arquivos da pasta
        const files = await window.electronAPI.listFiles(dirPath)
        displayFiles(files, dirPath)
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