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

/*********DOM  MANIPULATION  FUNCTIONS *********/
//Declare variables for container elements

function displayBooks(){
    for (let book of myLibrary){
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
            removeBtn.innerText = "X";
            removeBtn.onclick = () => {
                document.getElementById(book.id).remove();
            }

        bookDiv.appendChild(bookStatus);
        bookDiv.appendChild(changeBtn);
        bookDiv.appendChild(removeBtn);
        document.body.appendChild(bookDiv);
    }


}


//When the window is loaded, call the displayBooks function
window.addEventListener("load", displayBooks);
