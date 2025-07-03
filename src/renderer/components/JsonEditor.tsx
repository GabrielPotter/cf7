import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const JsonEditor: React.FC = () => {
    const [code, setCode] = React.useState<string>("console.log('Hello, MUI + CodeMirror!');");

    //return <CodeMirror value={code} style={{margin:"5px"}} extensions={[javascript()]} onChange={(val) => setCode(val)} />;

    return (
        <div className="parent">
            <CodeMirror
                height="95vh"
                value={code}
                extensions={[javascript()]}
                onChange={(val) => setCode(val)}
            />
        </div>
    );
};

export default JsonEditor;
