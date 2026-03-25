const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  openFilePath: (filePath) => ipcRenderer.invoke('dialog:openFilePath', filePath)
})