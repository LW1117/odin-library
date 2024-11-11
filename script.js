const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(bookToAdd) {
  myLibrary.push(bookToAdd);
}

function displayBooksInLibrary() {
  const table = document.getElementById("table");

  myLibrary.forEach((book) => {
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdAuthor = document.createElement("td");
    const tdPages = document.createElement("td");
    const tdRead = document.createElement("td");

    tdTitle.innerText = book.title;
    tdAuthor.innerText = book.author;
    tdPages.innerText = book.pages;
    tdRead.innerText = book.read;

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdPages);
    tr.appendChild(tdRead);

    table.appendChild(tr);
  });
}

// const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// addBookToLibrary(hobbit);
// addBookToLibrary(hobbit);
// addBookToLibrary(hobbit);
// displayBooksInLibrary();
