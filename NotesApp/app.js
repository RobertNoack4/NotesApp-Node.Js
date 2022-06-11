import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as notes from "./notes.js"

// Sets arguments for opening app.js
yargs(hideBin(process.argv))
    // Creates Add command
    .command({
        command: "add",
        describe: "Add a new note",
        builder: {
            // Creates Title Option
            title: {
                describe: "Note Title",
                demandOption: true,
                type: "string",
            },
            body: {
                describe: "Content of Note",
                demandOption: true,
                type: "string"
            },
        },
        // Creates Function to run when add is given as a command
        handler: function (argv) {
            notes.addNote(argv.title, argv.body)
        }
    })
    // Creates Remove command
    .command({
        command: "remove",
        describe: "Remove a note",
        // Creates Function to run when remove is given as a command
        handler: function () {
            console.log("Removing the note")
        }
    })
    // Creates List command
    .command({
        command: "list",
        describe: "Shows a list of all Notes",
        // Creates Function to run when remove is given as a command
        handler: function () {
            console.log("Listing all notes")
        }
    })
    // Creates Read command
    .command({
        command: "read",
        describe: "Read a note",
        // Creates Function to run when read is given as a command
        handler: function () {
            console.log("Reading a note")
        }
    })
    .demandCommand(1)
    .parse()