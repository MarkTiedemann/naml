#!/usr/bin/env node
'use strict'

const NAML = require('.')
const path = require('path')
const fs = require('fs-extra')
const chalk = require('chalk')

const colors = new chalk.constructor({ enabled: true })

const args = process.argv.slice(2)

const logError = err => {
    console.error(colors.red(` × Error: `) + err.message)
    process.exit(1)
}

if (args.length < 1)
    logError(new Error('missing arguments: [input-file] [output-file]'))

if (args.length < 2)
    logError(new Error('missing argument: [output-file]'))

const input = args.shift()
const output = args.shift()

const logSuccess = () => {
    console.log(colors.green(' √ Success: ') + `Converted ${input} to ${output}`)
    process.exit(0)
}

fs.readFile(input, (err, data) => {

    if (err) logError(err)

    const inputFormat =  path.extname(input).substring(1)
    const outputFormat =  path.extname(output).substring(1)

    try {

        const parsed = NAML.parse(data.toString(), inputFormat)
        const stringified = NAML.stringify(parsed, outputFormat)

        fs.outputFile(output, stringified, err => {
            if (err) logError(err)
            else logSuccess()
        })

    } catch (err) {
        logError(err)
    }

})
