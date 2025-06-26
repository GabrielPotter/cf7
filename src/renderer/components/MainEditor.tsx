import { EditorView } from "@codemirror/view";
import CodeMirror from "@uiw/react-codemirror";
import { erlangHighlight, erlangLanguage } from "../languages/erlang-mode";
import { useState } from "react";

const cmTheme = EditorView.theme({
  "&": { height: "100%", width: "100%" },
  ".cm-editor": { display: "flex", flexDirection: "column", flex: 1 },
  ".cm-scroller": {
    flex: 1,
    overflow: "auto",
    whiteSpace: "pre",       // vízszintes scroll
    boxSizing: "border-box",
  },
});


export const MainEditor: React.FC = () => {
  const [code, setCode] = useState("stringWithManyLinesAndLongLines"); // test content

  return (
    <CodeMirror
      value={code}
      height="100%"
      extensions={[cmTheme, erlangLanguage, erlangHighlight]}
      onChange={(v) => setCode(v)}
    />
  );
};
