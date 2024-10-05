import React from "react";
import { Button, Modal } from "react-bootstrap";
import useBooksContext from "../hooks/use-books-context";

function BookDelete({onSubmit,book,setShowDelete,showDelete}) {
    const {deleteById} = useBooksContext();
    // const [deleteId, setDeleteId] = useState(book.id);
    const handleDeleteSubmit = (event) => {
        event.preventDefault();
        console.log(book,"deletete comp");
        
        deleteById(book.id);
        onSubmit();
        handleClose();
    }
    const handleClose = () => setShowDelete(false);
    return (
        <div className="modal-delete">
            <Modal show={showDelete} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleDeleteSubmit}>
                        <div className="content">
                            Are you sure you want to delete <strong>{book.title}</strong>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="primary" onClick={handleDeleteSubmit}>Delete</Button>
                    <Button variant="dark" onClick={handleClose}>Close</Button>
                   
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BookDelete