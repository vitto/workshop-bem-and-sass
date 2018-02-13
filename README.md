# Workshop SASS for BEM development with Vittorio Vittori @ CSSDay 2018
A repo with examples to learn how to work with BEM in SASS

---

## Requirements

In order to work with the project you need:

- [NodeJS](https://nodejs.org) `v6.11.3` or later
- [GIT](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

In order to dev the project you need a good text editor like

### Atom

Additional [Atom](https://atom.io/) packages:

```
apm install auto-update-packages bracket-matcher colornamer double-tag editorconfig file-icons highlight-bad-chars highlight-selected linter linter-csslint linter-htmlhint linter-js-yaml linter-sass-lint linter-scss-lint minimap minimap-cursorline minimap-find-and-replace minimap-git-diff minimap-pigments minimap-selection multi-highlight-selected nyan-indent php-twig pigments sort-lines tree-view-autoresize
```

### Visual Studio Code

Additional [Visual Studio Code](https://code.visualstudio.com/) packages:

```
ext install EditorConfig.editorconfig PKief.material-icon-theme Tyriar.sort-lines akamud.vscode-theme-onedark bierner.color-info file-icons.file-icons glen-84.sass-lint guillaumedoutriaux.name-that-color kamikillerto.vscode-colorize mblode.twig-language ms-vscode.atom-keybindings oderwat.indent-rainbow rafamel.subtle-brackets robinbentley.sass-indented shinnn.standard vincaslt.highlight-matching-tag whatwedo.twig
```

Some of the plug-ins installed will need configuration files inside the project like [.editorconfig](https://github.com/vitto/workshop-bem-and-sass/blob/master/.editorconfig) and [.sass-lint.yml](https://github.com/vitto/workshop-bem-and-sass/blob/master/frontend/sass/.sass-lint.yml)

---

## Installation

Clone the repo with the terminal:

```
git clone https://github.com/vitto/workshop-bem-and-sass.git
```

Then install the node modules needed to run the project

```
npm install
```

## Development

After you have installed everything you can start watch the code with this command:

```
npm run watch
```

---

## Workshop steps

To see the list of the workshop steps:

```
git tag
```

Just use this command to move on the workshop's step:

```
git checkout workshop-step
```

If you have some trouble with your code, you can restart the step with this command:

```
git reset --hard
```

Enjoy!
