import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Placeholder } from "react-bootstrap";
import BookEdit from "./BookEdit";
import BookDelete from "./BookDelete";
import "../css/bookList.css";
import BookToast from "./BookToast";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [Toastmessage, setToastmessage] = useState("");
    const [ToastTitle, setToastTitle] = useState("");
    const [imageError, setImageError] = useState(false); // For handling image error
  
  // Function to handle showing the modal
  const handleShowEdit = () => setShowEdit(true);

  // Handle delete operation
  const handleDelete = () => {
    // deleteById(book.id);
    setShowDelete(true);
  };

  // Handle submit of edit form
  const handleSubmitEdit = () => {
    setShowEdit(false);
    setShowToast(true);
    setToastTitle("Book Edit");
    setToastmessage("Book updated successfully");
    
 };

  function arrayFlatten(array) {
    return array.reduce((accumulator, item) => {
      return accumulator.concat(Array.isArray(item) ? arrayFlatten(item) : item);
    },[])
  }

  const array = [12, 32,[53, 4], [82, 3, [92, 200]]];
  console.log(arrayFlatten(array),);
  

  const inertionSort = (arr) => {
    return arr.reduce((sortedArray, currentVal) => {
      // find the correct position for currentVal item
      const insertIndex = sortedArray.findIndex(el => el > currentVal);

      if (insertIndex === -1) {
        sortedArray.push(currentVal);

      } else {
        sortedArray.splice(insertIndex, 0, currentVal);
      }
      return sortedArray
    },[])
  }

  const flatArray=arrayFlatten(array)
  
  const sortedArray = inertionSort(flatArray);
  console.log(sortedArray,"dfksfnkjshnfskjn");
  
    const handleSubmitDelete = () => {
    setShowDelete(false);
    setShowToast(true);
    setToastTitle("Book Delete");
    setToastmessage("Book deleted successfully");
    setShowDelete(false);
  };
  
  const renderBookImage = (book) => {
    if (imageError || !book.title) {
      return (
        <Placeholder as={Card.Img} animation="glow">
          <Placeholder xs={12} style={{ width: "200px", height: "200px" }} />
        </Placeholder>
      );
    }

    return (
      <Card.Img
        variant="top"
        src={`https://picsum.photos/seed/${book.title}/200/200`}
        alt={book.title}
        onError={() => setImageError(true)} // Handle image load failure
      />
    );
  };
  
  return (
    <div>
      {showEdit && (
        <BookEdit
          onSubmit={handleSubmitEdit}
          book={book}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
      )}

      {showDelete && (
        <BookDelete
          onSubmit={handleSubmitDelete}
          book={book}
          showDelete={showDelete}
          setShowDelete={setShowDelete}
        />
      )}

      {showToast && (
        <BookToast
          showToast={showToast}
          setShowToast={setShowToast}
          message={Toastmessage}
          title={ToastTitle}
        />
      )}
      <div className='book-show'>
        <Card style={{ width: "18rem" }}>
          {renderBookImage(book)}
             
          <Card.Body>
            <Card.Title>
              <Link className='link link-title' to={`/books/${book.id}`}>
                <div className='book-title'> {book.title}</div>
              </Link>
              {/* <Placeholder as={Card.Title} animation='glow'>
                <Placeholder xs={12} />
              </Placeholder> */}
            </Card.Title>
            <Card.Text>
              <Link className='link link-author' to={`/books/${book.id}`}>
                <div className='book-author'>
                  <span className='text-primary'>by &nbsp;</span> {book.author}
                </div>
              </Link>
            </Card.Text>
            <Button onClick={handleShowEdit} variant='primary' className='m-2'>
              Edit
            </Button>
            {/* Delete button */}
            <Button onClick={handleDelete} variant='dark' className='m-2'>
              Delete
            </Button>
          </Card.Body>
        </Card>
        {/* <div className="card card-list">
                      <Link className="link mt-4" to={`/books/${book.id}`}>
                          <img 
                              src={`https://picsum.photos/seed/${book.title}/200/200`}
                              alt={book.title}
                          />
                      </Link>
                      <div className="row">
                          <Link className="link link-title" to={`/books/${book.id}`}>
                              <div className="book-title"> {book.title}</div>
                          </Link>
                          <Link className="link link-author" to={`/books/${book.id}`}>
                              <div className="book-author"><span className='text-primary'>by &nbsp;</span> {book.author}</div>
                          </Link>
                          <div className="actions">
                              <Button onClick={handleShowEdit}  >
                                  Edit
                              </Button>
                              <Button onClick={handleDelete} variant="dark" >
                                  Delete
                              </Button>
                          </div>
                      </div>
                  </div> */}
      </div>
    </div>
  );
}

export default BookShow;
