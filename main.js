const { app, BrowserWindow, dialog, ipcMain, shell } = require('electron')
const path = require('node:path')
const fs = require('fs')

async function handleFileOpen () {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ['openFile']
  })
  if (!canceled) {
    return filePaths[0]
  }
}

// Handle opening the file with default application
async function handleOpenFilePath (event, filePath) {
  await shell.openPath(filePath)
}

async function handleReadFile (event, filePath, encoding = 'utf8') {
  return fs.promises.readFile(filePath, encoding)
}

async function handleWriteFile (event, filePath, content, encoding = 'utf8') {
  return fs.promises.writeFile(filePath, content, encoding)
}

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false
    }
  })
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('dialog:openFile', handleFileOpen)
  ipcMain.handle('dialog:openFilePath', handleOpenFilePath)
  ipcMain.handle('fs:readFile', handleReadFile)
  ipcMain.handle('fs:writeFile', handleWriteFile)
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
