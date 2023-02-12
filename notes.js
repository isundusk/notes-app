const fs = require('fs')
const chalk = require('chalk')

const error = chalk.red.bold
const success = chalk.green.bold

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length === 0) {
        console.log(error('There are no notes!'))
    } else {
        console.log(success('Listing notes!'))
        notes.forEach((note) => console.log(note.title))
    }
    
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(success('Printing note!'))
        console.log(chalk.underline(note.title))
        console.log(note.body)
    } else {
        console.log(error('Note doesn\'t exist'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateSingle = notes.find((note) => note.title === title)

    if (!duplicateSingle) {
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

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notesToKeep.length == notes.length) {
        console.log(error('No note found!'))
    } else {
        saveNotes(notesToKeep)
        console.log(success('Note removed!'))
    }   
}

const loadNotes = () => {
    try {    
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    removeNote: removeNote,
    readNote: readNote
}