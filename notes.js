const fs = require('fs')
const chalk = require('chalk')

const error = chalk.red.bold
const success = chalk.green.bold

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length == 0 ) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(success('New note added!'))
    } else {
        console.log(error('Note title taken!'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if (notesToKeep.length == notes.length) {
        console.log(error('No note found!'))
    } else {
        saveNotes(notesToKeep)
        console.log(success('Note removed!'))
    }   
}

const loadNotes = function () {
    try{    
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}