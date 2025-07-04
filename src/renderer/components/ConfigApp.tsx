import { Box } from "@mui/material";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import JsonEditor from "./JsonEditor";

const ConfigApp: React.FC = () => {
    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <PanelGroup direction="horizontal">
                <Panel defaultSize={30} minSize={20}>
                    <div className="panel-left">Left</div>
                </Panel>
                <PanelResizeHandle className="handle" />
                <Panel minSize={30}>
                    <div className="panel-mid">
                        <JsonEditor />
                    </div>
                </Panel>
            </PanelGroup>
        </Box>
    );
};

export default ConfigApp;
