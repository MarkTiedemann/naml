
<br>
<center>
    ![](https://github.com/MarkTiedemann/naml/blob/master/logo.png)
</center>
--------
<br>
[![](https://travis-ci.org/MarkTiedemann/naml.svg?branch=master)](https://travis-ci.org/MarkTiedemann/naml) ![](https://img.shields.io/node/v/naml.svg)
<br>
<br>

- **Simple, unified API.**
- **Freely convert between:**
<br>
<br>
  - **JSON** (JavaScript Object Notation): `.json`
  - **HJSON** (Human JSON): `.hjson`
  - **JSON5** (ES5 JSON): `.json5`
  - **CSON** (CoffeeScript Object Notation): `.cson`
  - **YAML** (Yet Another Markup Language): `.yaml`
  - **TOML** (Tom's Obvious, Minimal Language): `.toml`
  - **INI** (Initialization File Format): `.ini`

## Installation

```
npm install naml
```

## CLI

```
naml [input-file] [output-file]
```
**Example:** `naml path/to/input.yaml path/to/output.json`

## API

```
const NAML = require('naml')
```

### `NAML.parse(string, type)`

- **string** `{String}`: the String to be parsed
- **type** `{String}`: the input type; one of the following: `json`, `hjson`, `json5`, `cson`, `yaml`, `toml`, `ini`
- **returns** `{Object}`: the resulting Object
- **throws** `{Error}`: if parsing failed

### `NAML.stringify(object, type)`

- **object** `{Object}`: the Object to be stringified
- **type** `{String}`: the input type; one of the following: `json`, `hjson`, `json5`, `cson`, `yaml`, `toml`, `ini`
- **returns** `{String}`: the resulting String
- **throws** `{Error}`: if stringifying failed

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).
