import { parser }from "./erlangParser"
import { styleTags, tags as t } from "@lezer/highlight"
import { LRLanguage, LanguageSupport, indentNodeProp, foldNodeProp, foldInside } from "@codemirror/language"

const parserWithMeta = parser.configure({
  props: [
    styleTags({
      Atom: t.variableName,
      Number: t.number,
      String: t.string,
      KeywordModule: t.keyword,
      KeywordExport: t.keyword
    }),
    indentNodeProp.add({
      function: ctx => ctx.column(ctx.node.from) + ctx.unit
    }),
    foldNodeProp.add({
      function: foldInside
    })
  ]
})

const erlangLang = LRLanguage.define({
  parser: parserWithMeta,
  languageData: { commentTokens: { line: "%" } }
})

export function erlang() {
  return new LanguageSupport(erlangLang)
}
