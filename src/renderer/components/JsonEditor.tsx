import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const JsonEditor: React.FC = () => {
    const [code, setCode] = React.useState<string>("console.log('Hello, MUI + CodeMirror!');");

    return <CodeMirror height="100vh" value={code} extensions={[javascript()]} onChange={(val) => setCode(val)} />;
};

export default JsonEditor;
