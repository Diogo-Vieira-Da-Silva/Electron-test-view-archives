const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  openDirectory: () => ipcRenderer.invoke('dialog:openDirectory'),
  openFilePath: (filePath) => ipcRenderer.invoke('dialog:openFilePath', filePath),
  readFile: (filePath, encoding = 'utf8') => ipcRenderer.invoke('fs:readFile', filePath, encoding),
  writeFile: (filePath, content, encoding = 'utf8') => ipcRenderer.invoke('fs:writeFile', filePath, content, encoding),
  listFiles: (dirPath) => ipcRenderer.invoke('fs:listFiles', dirPath)
})