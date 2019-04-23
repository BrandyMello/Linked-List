var submit = document.querySelector('.submit-btn')
var bookmark = document.querySelector('.card-display')
var bkmkInputs = document.querySelector('.bkmk-input')
var titleInput = document.querySelector('.title-input');
var urlInput = document.querySelector('.url-input');
// var submitBookmark = document.querySelector('.bookmark-inputs');

// submitBookmark.addEventListener('click', function (e) {
//   var bkmkTitle = document.querySelector('.bkmk-title');
//   var bkmkAddress = document.querySelector('.bkmk-address');
//   var cardTitle = document.querySelector('.card-title');
//   var cardLink = document.querySelector('.input-link');
//   bkmkTitle.value = cardTitle.innerContent;
//   bkmkAddress.value = cardLink.innerContent;
// });

submit.addEventListener('click', createBookmark);

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
}

function clearInputs() {
  titleInput.value = "";
  urlInput.value = "";
}


