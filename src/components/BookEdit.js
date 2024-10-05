import React from 'react';
import { useState } from "react";
import '../css/bookDetail.css'
import { Modal, Button } from 'react-bootstrap';
import useBooksContext from "../hooks/use-books-context";


function BookEdit({onSubmit,book,showEdit,setShowEdit}){
    const {EditById}=useBooksContext();

    const [newTitle,setnewTitle]=useState(book.title);
    const [newAuthor, setnewAuthor] = useState(book.author);
      // Function to handle closing the modal
    const handleClose = () => setShowEdit(false);
    
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        if (name === 'newTitle') {
            setnewTitle(value);
        } else {
            setnewAuthor(value);
        }
    }
    const handleEditSubmit=(event)=>{
        event.preventDefault();
        EditById(book.id,newTitle,newAuthor);
        onSubmit();
        handleClose()
    }

    return <div >
        <Modal show={showEdit} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <form onSubmit={handleEditSubmit}>
                    <div className='mb-3'>
                    <input className='form-control' name="newTitle" onChange={handleOnChange} value={newTitle} />
                    </div>
                    <div className='mb-3'>
                    <input className='form-control' name="newAuthor" onChange={handleOnChange} value={newAuthor} />
                    
                    </div>
                     </form>
        </Modal.Body>
            <Modal.Footer>
            <Button variant='primary'  onClick={handleEditSubmit}>Save</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        {/* <form onSubmit={handleEditSubmit}>
            <input name="newTitle" onChange={handleOnChange} value={newTitle}/>
            <div className='actions'>
            <Button variant='primary'  onSubmit={handleEditSubmit}>Save</Button>
            </div>
            
        </form> */}
    </div>
}

export default BookEdit;