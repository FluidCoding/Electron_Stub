// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const {
  BrowserWindow
} = require('electron').remote

// UI begin
//   Nav Bar begin
var ui_appNavMinimize = document.querySelector('#NavMinimize');
var ui_appNavFullscreen = document.querySelector('#NavFullscreen');
var ui_appNavMaxmimize = document.querySelector('#NavMaximize');
var ui_appNavClose = document.querySelector('#NavClose');
ui_appNavClose.addEventListener('click', btn_onClick_AppClose);
ui_appNavMaxmimize.addEventListener('click', btn_onClick_AppMaximize);
ui_appNavFullscreen.addEventListener('click', btn_onClick_AppFullscreen);
ui_appNavMinimize.addEventListener('click', btn_onClick_AppMinimize);

function btn_onClick_AppClose() {
  BrowserWindow.getFocusedWindow().close();
}

function btn_onClick_AppMaximize() {
  if (BrowserWindow.getFocusedWindow().isMaximized())
    BrowserWindow.getFocusedWindow().unmaximize();
  else
    BrowserWindow.getFocusedWindow().maximize();
}

function btn_onClick_AppFullscreen() {
  if (BrowserWindow.getFocusedWindow().isFullScreen())
    BrowserWindow.getFocusedWindow().setFullScreen(false);
  else
    BrowserWindow.getFocusedWindow().setFullScreen(true);
}

function btn_onClick_AppMinimize() {
  BrowserWindow.getFocusedWindow().minimize();
}
//   Nav Bar end