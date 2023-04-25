const util = require('util');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');



const readNote = util.promisify(fs.readFile);
const writeNote = util.promisify(fs.writeFile);

class Save {
    write(note) {
        return writeNote('db/db.json', JSON.stringify(note));
    }

    read() {
        return readNote('db/db.json', 'utf8');
    }


        // function to delete the note
        deleteNote(id) {
          return this.retrieveNotes()
              .then(notes => notes.filter(note => note.id !== id))
              .then(filteredNotes => this.write(filteredNotes));
      }


    retrieveNotes() {
      return this.read().then(notes => {
          let parsedNotes;
          try {
              parsedNotes = [].concat(JSON.parse(notes));
          } catch (err) {
              parsedNotes = [];
          }
          return parsedNotes;
      });
  }

    addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error('Cannot be blank');
        }
        // uuid to add new ids which are unique
        const newNote = { title, text, id: uuidv4() };

        // read notes and update them
        return this.retrieveNotes()
            .then(notes => [...notes, newNote])
            .then(updatedNotes => this.write(updatedNotes))
            .then(() => newNote);
    }


}

module.exports = new Save();
