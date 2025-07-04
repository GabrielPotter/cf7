import { BrowserWindow } from "electron";

export enum winName  {
 "config"
}
export const winCatalog: Map<winName, BrowserWindow> = new Map();
