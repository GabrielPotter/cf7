import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { erlang } from "../languages/erlangLang";

const ErlangEditor: React.FC = () => {
    const [code, setCode] = React.useState<string>(`-module(hello).
-export([world/0]).

world() ->
  io:format("Hello, Erlang!~n").`);

    return (
        <div className="parent">
            <CodeMirror height="95vh" value={code} extensions={[erlang()]} onChange={(val) => setCode(val)} />
        </div>
    );
};

export default ErlangEditor;
