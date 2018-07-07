
const fs = require('fs');

var addNote = (title , body) => {
    var notes = [];
    var note = {
        title,
        body
    };
    try{
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    }catch(e){

    }
        console.log('Hello');
    //the thing we used here is simply brilliant as this is an arrow function
    //not allowing duplicate notes to be added

    var duplicateNotes = notes.filter((note)=>note.title === title);
    console.log(duplicateNotes);
    if(duplicateNotes.length === 0)
    {
        notes.push(note);
        fs.writeFileSync('notes-data.json',JSON.stringify(notes));
        console.log('Add data i.e. '+body);
    }

}

module.exports = {
    addNote
};