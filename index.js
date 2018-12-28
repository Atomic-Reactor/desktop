/**
 * Electron desktop application file
 */

const { app, BrowserWindow } = require('electron');
const config = require('./.core/gulp.config');
const path = require('path');

let splash,
    win,
    port = process.env.PORT || 7000;

function splashScreen() {
    splash = new BrowserWindow({
        width: 800,
        height: 374,
        resizable: false,
        movable: false,
        focusable: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        frame: false,
        show: false,
        transparent: true,
        backgroundColor: '#FFFFFF',
    });

    splash.on('closed', () => {
        splash = null;
    });

    splash.once('ready-to-show', () => {
        splash.show();
        mainScreen();
    });

    splash.loadURL(`http://localhost:${port}/splash.html`);
}

function mainScreen() {
    win = new BrowserWindow({
        width: 480,
        height: 600,
        maxWidth: 480,
        minWidth: 480,
        minHeight: 400,
        maximizable: false,
        fullscreenable: false,
        show: false,
        backgroundColor: '#F7F7F7',
    });

    win.on('closed', () => {
        win = null;
    });

    win.once('ready-to-show', () => {
        setTimeout(() => {
            win.show();
            splash.destroy();
        }, 3000);
    });

    win.loadURL(`http://localhost:${port}`);
}

function init() {
    port = config.port.browsersync || port;
    splashScreen();
}

app.on('ready', init);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        mainScreen();
    }
});
