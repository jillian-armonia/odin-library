const myLibrary = [];

function Book(title, author, pageLength, readStatus, cover){
    this.title = title;
    this.author = author;
    this.pageLength = pageLength;
    this.readStatus = readStatus;
    this.cover = cover;
    this.id = crypto.randomUUID();
    this.changeStatus = function(){
        if (this.readStatus !== "read"){
            this.readStatus = "read";
        } else {
            this.readStatus = "not read yet";
        }
    }
};

function addBookToLibrary(title, author, pageLength, readStatus, cover){
    let newBook = new Book(title, author, pageLength, readStatus, cover);
    myLibrary.push(newBook);
}

addBookToLibrary("The Song of Achilles", "Madeline Miller", 416, "read", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848.jpg");
addBookToLibrary("Circe", "Madeline Miller", 363, "read", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1565909496i/35959740.jpg");
addBookToLibrary("Wolfsong", "T.J. Klune", 528, "read", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686575943i/62039417.jpg");
addBookToLibrary("Ravensong", "T.J. Klune", 512, "not read yet", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1686579139i/62039416.jpg");


/********VARIABLES FOR DOM ELEMENTS************/
const libDiv = document.querySelector("#library");
const showFormBtn = document.createElement("button");
showFormBtn.id = "show-form"
showFormBtn.innerText = "+";
showFormBtn.onclick = () => {
    document.querySelector("dialog").showModal();
}
const addTitle = document.querySelector("#add-title");
const addAuthor = document.querySelector("#add-author");
const addPages = document.querySelector("#add-pages");
const addReadStatus = document.querySelector("#read-status");
const addCover = document.querySelector("#img-src");
const addBookBtn = document.querySelector("#add-book");

/*********DOM  MANIPULATION  FUNCTIONS *********/
function displayBooks(){
    for (let book of myLibrary){
        setBook(book);
    }

    libDiv.appendChild(showFormBtn)
}


//When the window is loaded, call the displayBooks function
window.addEventListener("load", displayBooks);

//Create getNewBook function
function getNewBook(){
    if (!addCover.value){
        addCover.value = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Fpicture-sharing-sites%2F32%2FNo_Image-512.png&f=1&nofb=1&ipt=65ac1b9a0bf6c9a42e401056bd157f933d82d2d58906faf4a4206c1909286c07";
    }
    const newBook = new Book(addTitle.value, addAuthor.value, addPages.value, addReadStatus.value, addCover.value);
    myLibrary.push(newBook);
    showFormBtn.remove();
    setBook(newBook);
    libDiv.appendChild(showFormBtn);
    clearForm();
}

function setBook(book){
    const bookDiv = document.createElement("div")
            bookDiv.classList.add("card");
            bookDiv.id = book.id;
            bookDiv.innerHTML = `
            <img src="${book.cover}" alt="${book.title} cover">
            <div>
                <h3>${book.title}</h3>
                <p class="author">${book.author}</p>
                <p class="pages">${book.pageLength} pages</p>
            </div>
            `
            const bookStatus = document.createElement("p");
            bookStatus.classList.add("status");
            bookStatus.innerText = book.readStatus;

            const changeBtn = document.createElement("button");
            changeBtn.classList.add("change-status");
            changeBtn.innerText = "Change status";
            changeBtn.onclick = () => {
                book.changeStatus();
                bookStatus.innerText = book.readStatus;
            }

            const removeBtn = document.createElement("button");
            removeBtn.classList.add("remove-book");
            removeBtn.innerText = "Remove";
            removeBtn.onclick = () => {
                document.getElementById(book.id).remove();
            }


        bookDiv.lastElementChild.appendChild(bookStatus);
        bookDiv.appendChild(changeBtn);
        bookDiv.appendChild(removeBtn);
        libDiv.appendChild(bookDiv);
}

//Create clearForm function
function clearForm(){
    addTitle.value = "";
    addAuthor.value = "";
    addPages.value = "";
    addReadStatus.value = "not read yet";
    addCover.value = "";
    addBookBtn.disabled = true;
    document.querySelector("dialog").close();
}

//Add an eventListener for the addBookBtn
addBookBtn.addEventListener("click", getNewBook);
document.querySelector("#cancel").addEventListener("click", () => {
    clearForm();
})
document.body.addEventListener("change", (e) => {
    if (addAuthor.value && addTitle.value && addPages.value){
        addBookBtn.disabled = false;
    }
})
