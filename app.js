const myLibrary = [];

function Book(title, author, pageLength, readStatus, cover){
    this.title = title;
    this.author = author;
    this.pageLength = pageLength;
    this.readStatus = readStatus;
    this.cover = cover;
    this.id = crypto.randomUUID();
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
    //Create a function displayBooks()
        //Iterate through the library array
        //Each book will have its own .card
            //Create new elements
                //1. div with class .card
                //2.
