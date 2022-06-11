import fs from "fs"

export function getNotes() {
    const text = fs.readFileSync("notes.txt", "utf-8");
    return text;
}

export function addNote(title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes)
        console.log("Note added")
    }
    else {
        console.log("Note Title taken")
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