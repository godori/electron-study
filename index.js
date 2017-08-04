const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init win
let win;

function createWindow () {

  // Create Browser Window
  win = new BrowserWindow({width:600, height:600, icon : __dirname+'/img/logo.png'});

  // Load index.html
  win.loadURL(url.format({
    pathname : path.join(__dirname, 'index.html'),
    protocol : 'file:',
    slashes : true
  }));

  //open devtool
  win.webContents.openDevTools()

  win.on('closed', () => {  // run an function
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if(process.platform !== 'darwin'){  // if it's not osx
    app.quit();
  }
});

exports.openWindow = (filename) => {
  let win = new BrowserWindow({width:800,height:600})
  win.loadURL(`file://${__dirname}/` + filename + `.html`)
}
