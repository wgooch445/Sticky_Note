// references to the html elements
const addNoteButton = document.getElementById('add-note-button');
const notesContainer = document.getElementById('notes-container');

// function to create new note
function addNote() {
  const note = document.createElement('div');
  note.classList.add('note');
  note.contentEditable = true;       // makes notes editable
  note.textContent = 'new sticky note';
  const rotation = Math.random() * 10 - 5;
  note.style.setProperty('--rotation', `${rotation}deg`);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';

  deleteButton.addEventListener('click', () => {
    notesContainer.removeChild(note);
  });

  note.appendChild(deleteButton); // adding delete button inside note
  notesContainer.appendChild(note);
}

// click listener for add new note
addNoteButton.addEventListener('click', addNote);
