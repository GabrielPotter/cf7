import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

interface JsonEditorProps {data:string}

const JsonViewer: React.FC<JsonEditorProps> = ({data}) => {
    return <CodeMirror height="100vh" value={data} extensions={[javascript()]} readOnly={true} />;
};

export default JsonViewer;
