document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn')
  const filePathElement = document.getElementById('filePath')

  btn.addEventListener('click', async () => {
    try {
      if (!window.electronAPI || typeof window.electronAPI.openFile !== 'function') {
        throw new Error('electronAPI não disponível')
      }

      const filePath = await window.electronAPI.openFile()
      if (filePath) {
        filePathElement.textContent = filePath
        await window.electronAPI.openFilePath(filePath)
      } else {
        filePathElement.textContent = 'Nenhum arquivo selecionado.'
      }
    } catch (error) {
      console.error('Erro ao abrir o arquivo:', error)
      filePathElement.textContent = 'Erro ao abrir o arquivo. Veja console.'
    }
  })
})