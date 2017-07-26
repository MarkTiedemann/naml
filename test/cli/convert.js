'use strict'

const ava = require('ava')
const NAML = require('../../')
const { exec, readFiles } = require('../../test/helpers')

ava.before('before-test cleanup', () => exec('rm -rf assets'))

const makeTest = (inExt, outExt) => {

    ava(`${inExt} to ${outExt}`, test => {

        /* if json is the input extension, convert naml's package.json
         * into input.[outExt] files in the assets directory */

        /* otherwise read the input.[inExt] files from the assets directory
         * and generate output.[outExt] files there */

        const command = inExt === 'json'
            ? `naml ../../package.json assets/input.${outExt}`
            : `naml assets/input.${inExt} assets/output.${outExt}`

        const files = inExt === 'json'
            ? [`../../package.json`, `assets/input.${outExt}`]
            : [`assets/input.${inExt}`, `assets/output.${outExt}`]

        return exec(command)
            .then(() => {
                return readFiles(files)
            })
            .then(([input, output]) => {
                return [NAML.parse(input, inExt), NAML.parse(output, outExt)]
            })
            .then(([input, output]) => {
                test.deepEqual(input, output)
            })
    })

}

const types = ['json', 'json5', 'hjson', 'cson', 'yaml', 'toml', 'ini']
const extensions = types.concat(types.map(type => '.' + type))

for (let inExt of extensions) {
    for (let outExt of extensions) {
        makeTest(inExt, outExt)
    }
}

ava.after('after-test cleanup', () => exec('rm -rf assets'))
