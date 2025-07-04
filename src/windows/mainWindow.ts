import { BrowserWindow, Menu, MenuItemConstructorOptions } from "electron";
import path from "path";
import {winCatalog} from "../common"

export function createMainWindow() :BrowserWindow{
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        x: 200 + Math.floor(Math.random() * 100),
        y: 200 + Math.floor(Math.random() * 100),
        show: false,
        webPreferences: {
            preload: path.join(__dirname, "../preload.js"),
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
                { type: "separator" },
                { role: "quit" },
            ],
        },
        {
            label: "Tools",
            submenu: [{ role: "toggleDevTools" }],
        },
    ];
    win.menuBarVisible = true;
    const menu = Menu.buildFromTemplate(menuMainTemplate);
    win.setMenu(menu);
    win.loadFile(path.join(__dirname, "../renderer", "main.html"));
    win.once("ready-to-show", () => win.show());
    win.on("closed", () => {
        for (const cw of winCatalog.values()) {
            if (!cw.isDestroyed()) {
                cw.close();
            }
        }
        winCatalog.clear();
    });
    return win;
}