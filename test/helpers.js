'use strict'

const fs = require('fs')
const path = require('path')
const child = require('child_process')

const exec = (command) => {
    return new Promise ((resolve, reject) => {
        child.exec(command, err => {
            if (err) reject(err)
            else resolve()
        })
    })
}

const readFiles = (names) => {
    const promises = []
    for (let name of names) {
        promises.push(readFile(name))
    }
    return Promise.all(promises)
}

const readFile = (name) => {
    return new Promise((resolve, reject) => {
        const file = path.join(process.cwd(), name)
        fs.readFile(file, (err, data) => {
            if (err) reject(err)
            else resolve(data.toString())
        })
    })
}

module.exports = { exec, readFiles }
