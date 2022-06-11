const validator = require("validator")

const getNotes = require("./notes")
const notesText = getNotes()
console.log(notesText)

console.log(validator.isURL("test"))