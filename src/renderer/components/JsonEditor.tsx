import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

interface JsonEditorProps {data:string}

const JsonEditor: React.FC<JsonEditorProps> = ({data}) => {
    //const [code, setCode] = React.useState<string>("console.log('Hello, MUI + CodeMirror!');");

    return <CodeMirror height="100vh" value={data} extensions={[javascript()]} onChange={() => {}} />;
};

export default JsonEditor;
