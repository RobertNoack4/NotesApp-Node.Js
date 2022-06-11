import chalk from "chalk"
import * as notes from "./notes.js"

const notesText = notes.getNotes()
console.log(notesText)
console.log(chalk.green("success!"))