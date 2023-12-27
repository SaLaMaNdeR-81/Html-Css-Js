---
TODO Highlight VsCode Extension Config
---

```json

{
  "workbench.iconTheme": "material-icon-theme",
  "chatgpt.lang": "en",
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
  "workbench.colorTheme": "Default Dark+",
  "npm.enableRunFromFolder": true,
  "debug.javascript.codelens.npmScripts": "all",
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "todohighlight.isEnable": true,
  "todohighlight.keywords": [
    {
      "text": "[Note]",
      "cursor": "pointer",
      "fontWeight": "600",
      "color": "#ff0000",
      "backgroundColor": "yellow",
      "overviewRulerColor": "grey"
    },
    {
      "text": "[ToDo]",
      "cursor": "pointer",
      "color": "red",
      "befor": {
        "contentText": "🔧"
      },
      "fontWeight": "600",
      "border": "1px solid black",
      "borderRadius": "2px",
      "backgroundColor": "#000"
    },
    {
      "text": "[DeBug]",
      "cursor": "pointer",
      "fontWeight": "600",
      "color": "#fff",
      "befor": {
        "contentText": "🔧"
      },
      "border": "1px solid #F875AA",
      "borderRadius": "2px",
      "backgroundColor": "#F875AA"
    },
    {
      "text": "[Warning]",
      "cursor": "pointer",
      "fontWeight": "600",
      "befor": {
        "contentText": "⚠️"
      },
      "color": "red",
      // "border": "1px solid red",
      "borderRadius": "2px",
      "backgroundColor": "Gold"
    }
  ],
  "todohighlight.include": [
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
    "**/*.html",
    "**/*.php",
    "**/*.css",
    "**/*.scss"
  ]
}


```
