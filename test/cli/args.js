'use strict'

const ava = require('ava')
const NAML = require('../../')
const { exec } = require('../../test/helpers')
const fs = require('fs-extra')

ava.before('before-test cleanup', () => exec('rm -rf assets'))

ava('fails on 0 arguments provided', test => {
    return exec('naml')
        .catch(err => {
            test.truthy(err.message.includes('missing arguments'))
        })
})

ava('fails on 1 argument provided', test => {
    return exec('naml arg1')
        .catch(err => {
            test.truthy(err.message.includes('missing argument'))
        })
})

ava('fails on 1st argument: missing file', test => {
    return exec('naml assets/a.missing assets/b.json')
        .catch(err => {
            test.truthy(err.message.includes('no such file'))
        })
})

ava.before('create dummy', () => fs.outputFileSync('assets/a.invalid', ''))

ava('fails on 1st argument: invalid type', test => {
    return exec('naml assets/a.invalid assets/b.json')
        .catch(err => {
            test.truthy(err.message.includes('invalid type'))
        })
})

ava.before('create dummy', () => fs.outputFileSync('assets/a.json', '{}'))

ava('fails on 2nd argument: invalid type', test => {
    return exec('naml assets/a.json assets/b.invalid')
        .catch(err => {
            test.truthy(err.message.includes('invalid type'))
        })
})

ava.after('after-test cleanup', () => exec('rm -rf assets'))
