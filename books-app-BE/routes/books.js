const express = require("express");
const router = express.Router();
const { Book } = require("../models");

// get books
router.get("/", async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.log("error fetching books array");
    res.status(500).send("error retreiving books");
  }
});

// get single book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) res.json(book);
    else res.status(404).send("Book not found");
  } catch (error) {
    res.status(500).send("error retreing book");
  }
});

// add new book
router.post("/", async (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).send("titile and author are required");
  }
  try {
    const newBook = await Book.create({ title, author });

    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).send("error adding book");
  }
});

// update book details
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      book.title = req.body.title;
      book.author = req.body.author;
      await book.save();
      res.json(book);
    } else {
      res.status(404).send(`Book that you are trying to update not found`);
    }
  } catch (error) {
    res.status(500).send("error updating book");
  }
});

// deleter book
router.delete("/:id", async (req, res) => {
  try {
    const bookIndex = await Book.findByPk(req.params.id);

    if (bookIndex) {
      await bookIndex.destroy();
      res.json({ message: "Boom deleted" });
    } else {
      res.status("404").send(`book you selected to delete can't be deleted`);
    }
  } catch (error) {
    res.status(500).send("error deleting book");
  }
});

module.exports = router;
