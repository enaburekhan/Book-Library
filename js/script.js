const addBook = document.querySelector('.addbook');
const formCtrl = document.querySelector('.form-ctrl');
const maincont = document.querySelector('.maincont');
const btnclose = document.querySelector('.close');
const submit = document.querySelector('.submit-btn');
const bookName = document.getElementById('bookName');
const bookAuthor = document.getElementById('bookAuthor');
const numPages = document.getElementById('pages');
const readStatus = document.getElementById('status');
const bookcontainer = document.querySelector('.bookcont');
const errormsg = document.querySelector('#error');
const successmsg = document.querySelector('#success');

const myBooks = [{
    name: 'Ruby deep dive',
    author: 'Jesus Castello',
    pages: 203,
    status: 'Finished',
}];​
function Book(name, author, pages, status) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

addBook.addEventListener('click', () => {
    formCtrl.classList.add('show');
    maincont.classList.add('hide');
});​
function addBooktolibrary() {
    const name = bookName.value;
    const author = bookAuthor.value;
    const pages = numPages.value;
    const status = readStatus.value;
    const book = new Book(name, author, pages, status);
    myBooks.push(book);
}


