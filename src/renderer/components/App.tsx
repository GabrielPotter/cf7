import React from "react";
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
//import Edt from "./Edt";
import { PropertyGrid } from "./PropertyGrid";
import ErlangEditor from "./ErlangEditor";

const App: React.FC = () => (
 
    <PanelGroup direction="horizontal">
      <Panel defaultSize={30} minSize={20}>
        <div className="panel-left">Left</div>
      </Panel>
      <PanelResizeHandle className="handle" />
      <Panel minSize={30}>
        <div className="panel-mid"><ErlangEditor/></div>
      </Panel>
      <PanelResizeHandle className="handle" />
      <Panel defaultSize={30} minSize={20}>
        <div className="panel-right">"huhu"</div>
      </Panel>
    </PanelGroup>

);

export default App;
