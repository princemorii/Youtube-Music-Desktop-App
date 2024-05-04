const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });

    mainWindow.setTitle('Youtube Music - DoctorAm1r');
    mainWindow.loadURL('https://music.youtube.com');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});