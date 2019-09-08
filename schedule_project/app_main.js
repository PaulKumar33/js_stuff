const { app, BrowserWindow } = require('electron')
const path = require('path');
const url = require('url');


function CreateWindow(){
    let window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    })

    window.loadFile('main_ui.html');
    window.webContents.openDevTools();

    //close window handler
    window.on('closed', ()=>{
        window=null;
    })
}

app.on('ready', CreateWindow);

app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', ()=>{
    if(window == null){
        CreateWindow();
    }
})