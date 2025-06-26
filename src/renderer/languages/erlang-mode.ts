// erlang-mode.ts
import { StreamLanguage } from '@codemirror/language';
import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { tags } from '@lezer/highlight';

// 1. Erlang nyelvi parser sztring alapú token visszaadással
export const erlangLanguage = StreamLanguage.define({
  name: 'erlang',
  token(stream) {
    if (stream.match('%')) {
      stream.skipToEnd();
      return 'comment';
    }
    if (stream.match(/\b(fun|case|end|module|export|receive|when|->|of)\b/)) {
      return 'keyword';
    }
    if (stream.match(/"([^"\\]|\\.)*"/)) {
      return 'string';
    }
    if (stream.match(/'[a-zA-Z_][a-zA-Z0-9_@]*'/)) {
      return 'atom';
    }
    if (stream.match(/\d+#\w+/) || stream.match(/\d+(\.\d+)?/)) {
      return 'number';
    }
    stream.next();
    return null;
  }
});

// 2. Színezési szabályok a token sztringekhez
export const erlangHighlight = syntaxHighlighting(HighlightStyle.define([
  { tag: tags.keyword, color: '#C586C0' },
  { tag: tags.string, color: '#CE9178' },
  { tag: tags.number, color: '#B5CEA8' },
  { tag: tags.comment, color: '#6A9955', fontStyle: 'italic' },
  { tag: tags.atom, color: '#569CD6' },
]));
