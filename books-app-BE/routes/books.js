const express = require('express');
const router = express.Router();

let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
    { id: 4, title: 'Book 4', author: 'Author 4' },
    { id: 5, title: 'Book 5', author: 'Author 5' }
];

// get books
router.get('/', (req, res) => {
    res.json(books);
});

// get single book
router.get('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book)
        res.json(book);
    else
        res.status(404).send('Book not found');
});


// add new book
router.post('/', (req, res) => {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).send("titile and author are required");
    }
    const newBook = { id: books.length + 1, ...req.body };
    books.push(newBook);
    res.json(newBook);
});

// update book details
router.put('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        book.title = req.body.title;
        book.author = req.body.author;
        res.json(book);
    } else {
        res.status(404).send(`Book that you are trying to update not found`);
    }
});

// deleter book
router.delete('/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1);
        res.json(deletedBook);
    } else {
        res.status('404').send(`book you selected to delete can't be deleted`);
    }
});

module.exports = router;