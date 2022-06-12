import fs from "fs"
import chalk from "chalk"

export function listNotes() {
    const notes = loadNotes()
    console.log("Your Notes:")
    notes.forEach((note) => console.log(note.title))
}

export function readNote(title) {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote) {
        console.log(duplicateNote.title)
        console.log(duplicateNote.body)
    }
    else {
        console.log(chalk.red.inverse("There is no note with this title!"))
    }
}

export function addNote(title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Note added"))
    }
    else {
        console.log(chalk.red.inverse("Note Title taken"))
    }
}

export function removeNote(title) {
    const notes = loadNotes()
    const notesWithoutTitle = notes.filter((note) =>note.title !== title)

    if (notesWithoutTitle.length !== notes.length) {
        saveNotes(notesWithoutTitle)
        console.log(chalk.green.inverse("Note with the Title " + title + " has been removed"))
    }
    else {
        console.log(chalk.red.inverse("There is no note with the title " + title))
    }
}

function saveNotes(notes) {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJson)
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return[]
    }
}