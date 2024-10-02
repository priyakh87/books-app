import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "../css/bookDetail.css";
import useBooksContext from "../hooks/use-books-context";

function BookDetail() {
  const { getBookById } = useBooksContext();
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const fetchBook = await getBookById(id);
        setBook(fetchBook);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };
    fetchBook();
  }, [id, getBookById]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className='book-detail container '>
      <div className='card m-50 pt-4 pb-4'>
        <div className='row mb-4'>
          <div className='image-section'>
            <img
              className='item-img'
              src={`https://picsum.photos/seed/${book.id}/400/400`}
              alt='{book.title}'
            />
          </div>
          <div className='title-section'>
            <p className='title'>{book.title}</p>
            <p className='author mb-2'>{book.author}</p>
            <div className="description-section mt-2">
              <p className='description'><strong className="font-size-16 mb-2">Description</strong> <br /> {book.description}</p>
              <br />
              </div>
              <div className="description-section m-2">
              <p className='description'><strong className="font-size-16 mb-2">Language</strong> <br/> {book.language}</p>
              </div>
          </div>
        </div>
        <div className="description-section p-4">
          <div className="actions">
            <button className="read" onClick={handleShow}>Read</button>
            <button className="cart">Add to cart</button>
            <button className="share"><i class="ri-share-line"></i></button>
          </div>
        </div>
      </div>
      {/* modal read */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{book.description}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BookDetail;
