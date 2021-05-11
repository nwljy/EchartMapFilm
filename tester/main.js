const electron = require("electron");
const { app } = electron;
const { BrowserWindow } = electron;
const path = require("path");
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 960,
    height: 660,
    title: "EchartMapFilm",
    webPreferences: {
      nodeIntegration: false, //是否完整的支持 node. 默认值为true
      nodeIntegrationInWorker: false, // 是否在Web工作器中启用了Node集成
    },
  });
  var htmlFile = "../app/index.html";
  var htmlFilePath = path.resolve(__dirname, htmlFile);
  win.loadURL("file://" + htmlFilePath);
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
