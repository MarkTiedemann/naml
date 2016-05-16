'use strict'

const ava = require('ava')
const NAML = require('../../')

ava('throws on missing string', test => {
    try {
        NAML.parse()
    } catch (e) {
        test.is(e.message, 'missing string')
    }
})

ava('throws on missing type', test => {
    try {
        NAML.parse('{}')
    } catch (e) {
        test.is(e.message, 'missing type')
    }
})

ava('throws on invalid type', test => {
    try {
        NAML.parse('{}', 'xml')
    } catch (e) {
        test.is(e.message, 'invalid type')
    }
})
