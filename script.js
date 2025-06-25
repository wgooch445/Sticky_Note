// references to the html elements
const addNoteButton = document.getElementById('add-note-button');
const notesContainer = document.getElementById('notes-container');

// function to create new note
function addNote() {
  const note = document.createElement('div');
  note.classList.add('note');
  
  const noteContent = document.createElement('div');
  noteContent.classList.add('note-content');
  noteContent.contentEditable = true; // makes note content editable
  noteContent.textContent = 'new sticky note';


  const rotation = Math.random() * 10 - 5;
  note.style.setProperty('--rotation', `${rotation}deg`);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.contentEditable = false; // makes delete button not editable
  deleteButton.classList.add('delete-note-button');

  deleteButton.addEventListener('click', () => {
    notesContainer.removeChild(note);
  });

  note.appendChild(deleteButton); // adding delete button inside note
  note.appendChild(noteContent); // adding note content inside note
  note.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
  note.style.top = `${Math.random() * (window.innerHeight - 200)}px`;
  note.style.zIndex = Math.floor(Math.random() * 1000); // random z-index for stacking
  note.style.transform = `rotate(${rotation}deg)`; // applying rotation
  note.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`; // random background color 
  notesContainer.appendChild(note);
}

// click listener for add new note
addNoteButton.addEventListener('click', addNote);
