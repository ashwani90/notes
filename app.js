const notes = require('./notes.js');

const yargs = require('yargs');

const argv = yargs.argv;

console.log(argv+'  '+ process.argv[2]);
console.log("Yargs", argv);
const command = argv.com;
switch(command)
{
    case 'add':
        notes.addNote(argv.title , argv.body);
        break;
}