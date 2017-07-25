'use strict'

const JSON5 = require('json5')
const HJSON = require('hjson')
const CSON = require('cson')
const YAML = require('js-yaml')
const TOML = { parse: require('toml-j0.4').parse, stringify: require('tomlify-j0.4') }
const INI = require('ini')

/**
 * Removes '.' in file extensions
 * @param  {string} type input file extension
 * @return {string}      file extension without '.'
 */
const validType = (type) => {
    if (type.charAt(0) === '.') {
        type = type.substr(1)
    }
    return type
}

const parse = (string, type) => {
    if (!string) throw new Error('missing string')
    if (!type) throw new Error('missing type')
    type = validType(type)
    switch (type) {
        case 'json': return JSON.parse(string)
        case 'json5': return JSON5.parse(string)
        case 'hjson': return HJSON.parse(string.toString())
        case 'cson': return CSON.parse(string)
        case 'yaml': return YAML.safeLoad(string)
        case 'toml': return TOML.parse(string)
        case 'ini': return INI.parse(string)
        default: throw new Error('invalid type')
    }
}

const stringify = (object, type) => {
    if (!object) throw new Error('missing object')
    if (!type) throw new Error('missing type')
    type = validType(type)
    switch (type) {
        case 'json': return JSON.stringify(object)
        case 'json5': return JSON5.stringify(object)
        case 'hjson': return HJSON.stringify(object)
        case 'cson': return CSON.stringify(object)
        case 'yaml': return YAML.safeDump(object)
        case 'toml': return TOML.stringify(object)
        case 'ini': return INI.stringify(object)
        default: throw new Error('invalid type')
    }
}

module.exports = { parse, stringify }
