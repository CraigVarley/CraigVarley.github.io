
// DOM vars
const new_note_button = document.querySelector('#new-button');
const timestamp_html = document.querySelector('#notes-content-timestamp');
const notes_box = document.querySelector('#notes-box-writer');
const note_title = document.querySelector('#notes-content-title');
const note_body = document.querySelector("notes-content-body");


// listeners
new_note_button.addEventListener('click', () => {
  notes_box.style.visibility = 'visible';
  timestamp_html.innerHTML = new Date();
  newNote();
})

note_title.addEventListener('keyup', () => {
  get value
  add value to title
})

// note_title.addEventListener('keypress' () => {
//   localStorage.
// })

function newNote() {
  localStorage.setItem('untitled', 'empty');
}

function saveTitle() {
  localStorage.setItem
}

function deleteNote() {
  //stuff
}
