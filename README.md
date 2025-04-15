# Library Project for The Odin Project
## Tasks
1. Store your books in an array
2. Create a constructor function for your books
3. Create a separate function (not inside the constructor) to create a book from the arguments it takes in and store the book in the array
4. Make sure each book has a unique `id` using `crypto.randomUUID()`

### Example code
```
    const myLibrary = [];

    function Book() {
    // the constructor...
    }

    function addBookToLibrary() {
    // take params, create a book then store it in the array
    }
```

5. Create a function that loops through the array and displays each book on the page. You can use some sort of table or each book can be their own "card."
6. Add a "New Book" button that brings up a form allowing users to input details for the new book and add it to the library.
7. If you create with a form, using `submit` will try to send the data to a server by default, so you can use `event.preventDefault()` to stop this.
8. Add a button on each book's display to remove the book from the library.
    - You can use a [data-attribute](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Solve_HTML_problems/Use_data_attributes) to correspond to the unique `id` of the book object
9. Add a button on each book's display to change its `read` status
    - You can use a `Book` prototype function that toggles a book instance's `read` status
