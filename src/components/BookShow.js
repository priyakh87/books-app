import { useState } from "react";
import "../css/bookList.css";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

function BookShow({book}){
    const {deleteById}= useBooksContext();
    const [showEdit,setShowEdit]=useState(false);
    
    const handleDelete=()=>{
        deleteById(book.id);
    }

    const handleEdit=()=>{
        setShowEdit(!showEdit);
    }

    const handleSubmitEdit=()=>{
        setShowEdit(false);
    }

    return <div className="book-show">
        {showEdit && <BookEdit onSubmit={handleSubmitEdit} book={book}/>}
       
        {!showEdit && 
        <div>
            <img src={`https://picsum.photos/seed/${book.id}/300/300`} alt="book images"/>
            <div className="row">
            <div className="book-title"> {book.title}</div>
            <div className="actions">
                <button onClick={handleEdit} className="btn-edit">Edit</button>
                <button onClick={handleDelete} className="btn-delete">Delete</button>
            </div>
            </div>
        </div>
        }
    </div>
}

export default BookShow