import { EditorView } from "@codemirror/view";
import CodeMirror from "@uiw/react-codemirror";
import { erlangHighlight, erlangLanguage } from "../languages/erlang-mode";
import { useState } from "react";

const fullFlexTheme = EditorView.theme({
  "&": { height: "100%", width: "100%" },
  ".cm-editor": { display: "flex", flexDirection: "column", flex: 1 },
  ".cm-scroller": {
    flex: 1,
    overflow: "auto",    // both vertical and horizontal scrollbars
    whiteSpace: "pre",   // long lines don't wrap
    boxSizing: "border-box",
  },
});

export const MainEditor: React.FC = () => {
  const [code, setCode] = useState("stringWithManyLinesAndLongLines"); // test content

  return (
    <CodeMirror
      value={code}
      height="100%"
      extensions={[fullFlexTheme, erlangLanguage, erlangHighlight]}
      onChange={(v) => setCode(v)}
    />
  );
};
