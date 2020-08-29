const notes = [];

function addNote(content, id) {
  let note = { content: content, id: id };
  notes.push(note);
  return notes;
}
console.log(addNote("coding", 12));
console.log(addNote("Ecommerce", 45));
console.log(addNote("BusinessIT", 78));

function getNoteById(id) {
  /*for (let i = 0; i < notes.length; i++) {
          if (notes[i].id === id) {
            console.log(notes.note);
          }
        }*/
  notes.forEach((arrayItem) => {
    if (id === arrayItem.id) {
      console.log(arrayItem);
    }
  });
}
getNoteById(45);

function getAllNotes() {
  return notes;
}
console.log(getAllNotes());
