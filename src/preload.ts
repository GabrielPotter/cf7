import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
    ping: () => ipcRenderer.invoke("ping"),
});
contextBridge.exposeInMainWorld("configAPI", {
    get: (key: string) => ipcRenderer.invoke("config:get", key),
    set: (key: string, value: any) => ipcRenderer.invoke("config:set", key, value),
    loadSchema: (name: string) => ipcRenderer.invoke("load-schema", name),
});

contextBridge.exposeInMainWorld("filesysAPI", {
    selectFolder: () => ipcRenderer.invoke("dialog:select-folder"),
    selectFile: () => ipcRenderer.invoke("dialog:select-file"),
});

contextBridge.exposeInMainWorld("jsonAPI", {
    loadJsonAndSchema: (baseDir: string, baseName: string) => ipcRenderer.invoke("json:load", baseDir, baseName),
    saveJson: (baseDir: string, baseName: string, content: any) =>
        ipcRenderer.invoke("json:save", baseDir, baseName, content),
});
