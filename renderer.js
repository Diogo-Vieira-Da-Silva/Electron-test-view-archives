 
const btn = document.getElementById('btn')
const filePathElement = document.getElementById('filePath')

btn.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFile()
  if (filePath) {
    // Create a clickable link
    filePathElement.innerHTML = `<a href="#" id="fileLink">${filePath}</a>`
    
    // Add click handler to open the file
    document.getElementById('fileLink').addEventListener('click', (e) => {
      e.preventDefault()
      window.electronAPI.openFilePath(filePath)
    })
  }
})