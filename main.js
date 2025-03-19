const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    titleBarStyle: 'hidden',
    titleBarOverlay: true
  })
  win.loadURL('http://torw.ct.ws/yesc/')
}

app.whenReady().then(() => {
  createWindow()
})
