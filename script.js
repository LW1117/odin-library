const myLibrary = [];

function Book(title, author, pages, read) {
  return { title, author, pages, read };
}

function addBookToLibrary(bookToAdd) {
  myLibrary.push(bookToAdd);
}

function displayBooksInLibrary() {
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  myLibrary.forEach((book) => {
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPages = document.createElement("td");
    const tdRead = document.createElement("td");
    const deleteButton = document.createElement("button");
    const finishedButton = document.createElement("button");

    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      myLibrary.splice(myLibrary.indexOf(book), 1);
      displayBooksInLibrary();
    });

    finishedButton.innerText = "Finished?";
    finishedButton.addEventListener("click", () => {
      book.read = !book.read;
      displayBooksInLibrary();
    });

    tdTitle.innerText = book.title;
    tdAuthor.innerText = book.author;
    tdPages.innerText = book.pages;
    tdRead.innerText = book.read;

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdPages);
    tr.appendChild(tdRead);
    tr.appendChild(finishedButton);
    tr.appendChild(deleteButton);

    tbody.appendChild(tr);
  });
}

const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const book = new Book(title.value, author.value, pages.value, read.checked);
  addBookToLibrary(book);
  displayBooksInLibrary();
});
