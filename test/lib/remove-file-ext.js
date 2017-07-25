'use strict'

const ava = require('ava')
const NAML = require('../../')

ava('removes dot from file extension', test => {
    test.is(
        NAML.removeFileExt('.json')
    , 'json')
})

ava('removes nothing', test => {
    test.is(
        NAML.removeFileExt('json')
    , 'json')
})

ava('cannot throw error', test => {
    try {
        ['', '中文', '.\s', '\s.']
        .forEach((value) => {
            NAML.removeFileExt(value)
        })
    } catch (e) {
        test.fail()
    } finally {
        test.pass()
    }
})
