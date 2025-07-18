import { Box } from "@mui/material";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { PropertiesPanel } from "./PropertiesPanel";
import { useState } from "react";
import JsonViewer from "./JsonViewer";

const ConfigApp: React.FC = () => {
    const [data, setData] = useState("");
    const handlePropertyGridChange = (data: any) => {
        const jsonString = JSON.stringify(data, null, 2);
        setData(jsonString);
    };
    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <PanelGroup direction="horizontal">
                <Panel defaultSize={30} minSize={20}>
                    <div className="panel-left">
                        <PropertiesPanel onFormDataChange={handlePropertyGridChange} />
                    </div>
                </Panel>
                <PanelResizeHandle className="handle" />
                <Panel minSize={30}>
                    <div className="panel-mid">
                        <JsonViewer data={data} />
                    </div>
                </Panel>
            </PanelGroup>
        </Box>
    );
};

export default ConfigApp;
