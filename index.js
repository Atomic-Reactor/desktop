/**
 * Electron desktop application file
 */

const { app, BrowserWindow } = require('electron');
const config = require('./.core/gulp.config');
const path = require('path');

let splash, win;

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

    splash.loadURL(`http://localhost:${config.port.browsersync}/splash.html`);
}

function mainScreen() {
    win = new BrowserWindow({ width: 1024, height: 768, show: false });

    win.on('closed', () => {
        win = null;
    });

    win.once('ready-to-show', () => {
        setTimeout(() => {
            win.show();
            splash.destroy();
        }, 3000);
    });

    win.loadURL(`http://localhost:${config.port.browsersync}/toolkit`);
}

app.on('ready', splashScreen);

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
