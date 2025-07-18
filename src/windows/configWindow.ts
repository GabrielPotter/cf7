import { BrowserWindow } from "electron";
import { winCatalog, winName } from "../common";
import path from "path";

export function createConfigWindow() {
    const cc = winName.config;
    if (winCatalog.has(cc)) {
        const existing = winCatalog.get(cc);
        if (!existing?.isDestroyed()) {
            existing?.focus();
            return;
        }
        winCatalog.delete(cc);
    }
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        title: "Config",
        webPreferences: {
            preload: path.join(__dirname, "../preload.js"),
        },
    });
    //win.menuBarVisible = false;
    win.loadFile(path.join(__dirname, "../renderer", "config.html"));
    win.on("closed", () => {
        winCatalog.delete(cc);
    });
    winCatalog.set(cc, win);
}
