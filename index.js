var submit = document.querySelector('.submit-btn')
var bookmark = document.querySelector('.card-display')
var bkmkInputs = document.querySelector('.bkmk-input')
var titleInput = document.querySelector('.title-input');
var urlInput = document.querySelector('.url-input');
var markRead = document.querySelector('.mark-read-btn')

submit.addEventListener('click', createBookmark);
markRead.addEventListener('click', toggleRead);

function createBookmark(e) {
  e.preventDefault(e);
    bookmark.innerHTML += `
     <div class="bookmark-card">
      <div class="card-info">
        <h2 class="card-title">${titleInput.value}</h2>
        <p class="input-link">${urlInput.value}</p>
      </div>
      <div class="card-btns">
        <button class="mark-read-btn">Read</button>
        <button class="delete-btn">Delete</button>
      </div>
    </div>`
    clearInputs();
    document.querySelector('.message').classList.add('hidden');
}

function clearInputs() {
  titleInput.value = "";
  urlInput.value = "";
}

function loadMessage() {
  bookmark.innerHTML += `
  <p class="message">You can bookmark websites here!</p>`;
}
window.onload = loadMessage;

function toggleRead(e) {
  
}