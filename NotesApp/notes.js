import fs from "fs"
import chalk from "chalk"

export function getNotes() {

}

export function addNote(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
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