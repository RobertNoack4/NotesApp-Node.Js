const fs = require("fs");

fs.writeFileSync("notes.txt", "Dieser Text wurde mit dem File erstellt.")
fs.appendFileSync("notes.txt", "\nDieser Text wurde hinzugefuegt.");

const getNotes = function () {
    const text = fs.readFileSync("notes.txt", "utf-8");
    return text;
}

module.exports = getNotes;