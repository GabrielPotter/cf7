import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { erlang } from "../languages/erlangLang";

const ErlangEditor: React.FC = () => {
    const [code, setCode] = React.useState<string>(`-module(hello).
-export([world/0]).

world() ->
  io:format("Hello, Erlang!~n").`);

    return <CodeMirror height="100vh" value={code} extensions={[erlang()]} onChange={(val) => setCode(val)} />;
};

export default ErlangEditor;
