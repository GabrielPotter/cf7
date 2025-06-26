import React, { useRef, useState } from "react";
import { Box, Tabs, Tab, Paper } from "@mui/material";
import { ExplorerPanel } from "./ExplorerPanel";
import { PropertiesPanel } from "./PropertiesPanel";
import { MainEditor } from "./MainEditor";
import { SettingsView } from "./SettingsView";

export const App: React.FC = () => {
    const [leftWidth, setLeftWidth] = useState(240);
    const [rightWidth, setRightWidth] = useState(240);
    const containerRef = useRef<HTMLDivElement>(null);
    const isResizingLeft = useRef(false);
    const isResizingRight = useRef(false);
    const [tab, setTab] = useState(0);

    const onMouseMove = (e: MouseEvent) => {
        if (isResizingLeft.current && containerRef.current) {
            const newWidth = e.clientX;
            setLeftWidth(Math.max(120, Math.min(newWidth, 500)));
        }
        if (isResizingRight.current && containerRef.current) {
            const newWidth = containerRef.current.clientWidth - e.clientX;
            setRightWidth(Math.max(120, Math.min(newWidth, 500)));
        }
    };

    const onMouseUp = () => {
        isResizingLeft.current = false;
        isResizingRight.current = false;
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
    };

    const startResize = (side: "left" | "right") => {
        if (side === "left") isResizingLeft.current = true;
        else isResizingRight.current = true;
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseUp);
    };

    return (
        <Box
            ref={containerRef}
            display="flex"
            width="100vw"
            height="100vh"
            overflow="hidden"
            flexDirection="row"
            sx={{ boxSizing: "border-box" }}
        >
            <Box
                width={leftWidth}
                bgcolor="#1e1e1e"
                color="white"
                sx={{ padding: 1, boxSizing: "border-box", overflow: "auto" }}
            >
                <ExplorerPanel />
            </Box>
            <Box
                width={4}
                sx={{ cursor: "col-resize", backgroundColor: "#ccc" }}
                onMouseDown={() => startResize("left")}
            />

            <Box display="flex" flexDirection="column" height="100vh" width="100vw" overflow="hidden">
                <Paper square>
                    <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="scrollable">
                        <Tab label="main.ts" />
                        <Tab label="Settings" />
                    </Tabs>
                </Paper>

                {/* FIX HERE */}
                <Box flex={1} display="flex" flexDirection="column" minHeight={0} minWidth={0} overflow="hidden">
                    {/* THIS BOX is the key: flex + height: 0 */}
                    <Box flex={1} display="flex" height={0} width="100%">
                        {tab === 0 ? <MainEditor /> : <SettingsView />}
                    </Box>
                </Box>
            </Box>

            <Box
                width={4}
                sx={{ cursor: "col-resize", backgroundColor: "#ccc" }}
                onMouseDown={() => startResize("right")}
            />

            <Box width={rightWidth} bgcolor="#f0f0f0" sx={{ padding: 1, boxSizing: "border-box", overflow: "auto" }}>
                <PropertiesPanel />
            </Box>
        </Box>
    );
};
