const { app, BrowserWindow, dialog, ipcMain, shell } = require('electron')

const path = require('node:path')

// ...

async function handleFileOpen () {
  const { canceled, filePaths } = await dialog.showOpenDialog({})
  if (!canceled) {
    return filePaths[0]
  }
}

// Handle opening the file with default application
async function handleOpenFilePath (event, filePath) {
  await shell.openPath(filePath)
}

function createWindow () {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  ipcMain.handle('dialog:openFile', handleFileOpen)
  ipcMain.handle('dialog:openFilePath', handleOpenFilePath)
  createWindow()
})