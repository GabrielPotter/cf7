import React, { useEffect } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
//import Edt from "./Edt";
import ErlangEditor from "./ErlangEditor";
import { Box, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import { winName } from "../../common";
import { useSnackbar } from "notistack";
import "../../vite-env"
import { GraphicsEditor } from "./GraphicsEditor";

const App: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        window.workerAPI.onWorkerMessage((event, payload) => {
            enqueueSnackbar("This is a success message!", { variant: "info" });
        });
    }, []);
    const handleClick = (wintype: winName) => {
        window.windowAPI.openConfig(wintype);
    };
    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <Box
                sx={{
                    width: 40,
                    minWidth: 40,
                    maxWidth: 40,
                    backgroundColor: "#f0f0f0",
                    p: 2,
                }}
            >
                <IconButton color="primary" onClick={() => handleClick(winName.config)}>
                    <HomeIcon />
                </IconButton>
                <IconButton color="primary">
                    <SettingsIcon />
                </IconButton>
                <IconButton color="primary">
                    <InfoIcon />
                </IconButton>
            </Box>

            <PanelGroup direction="horizontal">
                <Panel defaultSize={30} minSize={20}>
                    <div className="panel-left">Left</div>
                </Panel>
                <PanelResizeHandle className="handle" />
                <Panel minSize={30}>
                    <div className="panel-mid">
                        <ErlangEditor />
                    </div>
                </Panel>
                <PanelResizeHandle className="handle" />
                <Panel defaultSize={30} minSize={20}>
                    <div className="panel-right"><GraphicsEditor/></div>
                </Panel>
            </PanelGroup>
        </Box>
    );
};

export default App;
