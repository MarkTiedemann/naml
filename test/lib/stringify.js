'use strict'

const ava = require('ava')
const NAML = require('../../')

ava('throws on object string', test => {
    try {
        NAML.stringify()
    } catch (e) {
        test.is(e.message, 'missing object')
    }
})

ava('throws on missing type', test => {
    try {
        NAML.stringify({})
    } catch (e) {
        test.is(e.message, 'missing type')
    }
})

ava('throws on invalid type', test => {
    try {
        NAML.stringify({}, 'xml')
    } catch (e) {
        test.is(e.message, 'invalid type')
    }
})
