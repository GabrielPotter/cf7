import { winName } from "./common";
declare global {
    interface Window {
        windowAPI: {
            openConfig: (name: winName) => void;
        };
        workerAPI: {
            onWorkerMessage: (callback: (event: string, payload: any) => void) => void;
        };
    }
}
