import { app, BrowserWindow, dialog, ipcMain, Menu, MenuItemConstructorOptions } from "electron";
import { readFile, writeFile } from "fs/promises";
import path, { join, resolve } from "path";
import { pathToFileURL } from "url";

function createWindow() {
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        x: 200 + Math.floor(Math.random() * 100),
        y: 200 + Math.floor(Math.random() * 100),
        show: false,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });
    const menuMainTemplate: MenuItemConstructorOptions[] = [
        {
            label: "File",
            submenu: [
                {
                    label: "New File",
                    accelerator: "CmdOrCtrl+N",
                },
                {type:"separator"},
                {role:"quit"}
            ],
        },
        {
            label: "Tools",
            submenu: [
                {role:"toggleDevTools"},
            ]
        },
    ];
    win.menuBarVisible = true;
    const menu = Menu.buildFromTemplate(menuMainTemplate);
    Menu.setApplicationMenu(menu);
    win.loadFile(path.join(__dirname, "renderer", "main.html"));
    win.once("ready-to-show", () => win.show());
    return win;
}

app.whenReady().then(() => {
    createWindow();
});

ipcMain.handle("ping", () => "pong");

ipcMain.handle("load-schema", async (_event, name: string) => {
    const path = join(__dirname, "configs", name); // assumes dist/configs
    try {
        const file = await readFile(path, "utf-8");
        return JSON.parse(file);
    } catch (err) {
        console.error("Error loading schema:", err);
        return null;
    }
});

ipcMain.handle("dialog:select-folder", async () => {
    const result = await dialog.showOpenDialog({
        title: "Select Folder",
        properties: ["openDirectory"],
        defaultPath: resolve(__dirname),
    });
    return result.filePaths[0] ?? "";
});

ipcMain.handle("dialog:select-file", async () => {
    const result = await dialog.showOpenDialog({
        title: "Select File",
        properties: ["openFile"],
        defaultPath: resolve(__dirname),
    });
    return result.filePaths[0] ?? "";
});

ipcMain.handle("json:load", async (_e, baseDir: string, baseName: string) => {
    try {
        const jsonPath = (() => {
            if (baseDir === "configs") {
                return join(__dirname, baseDir);
            } else {
                return baseDir;
            }
        })();

        const jsonText = await readFile(join(jsonPath, `${baseName}.json`), "utf-8");
        const json = JSON.parse(jsonText);

        const schemaName = (() => {
            if (json.$schema) {
                return json.$schema;
            } else {
                return `${baseName}.schema.json`;
            }
        })();

        const schemaText = await readFile(join(__dirname, "configs", schemaName), "utf-8");

        return {
            data: json,
            schema: JSON.parse(schemaText),
        };
    } catch (err) {
        console.error("Failed to load config/schema", err);
        return null;
    }
});

ipcMain.handle("json:save", async (_e, baseDir: string, baseName: string, content: any) => {
    try {
        const jsonPath = (() => {
            if (baseDir === "configs") {
                return join(__dirname, baseDir);
            } else {
                return baseDir;
            }
        })();
        await writeFile(join(jsonPath, `${baseName}.json`), JSON.stringify(content, null, 2), "utf-8");
        return true;
    } catch (err) {
        console.error("Failed to save config", err);
        return false;
    }
});
