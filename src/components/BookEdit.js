import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";


function BookEdit({onSubmit,book}){
    const {EditById}=useBooksContext();

    const [newTitle,setnewTitle]=useState(book.title);

    const handleOnChange=(event)=>{
        setnewTitle(event.target.value);
    }
    const handleEditSubmit=(event)=>{
        event.preventDefault();
        onSubmit();
        EditById(book.id,newTitle);
    }

    return <div >
        
        <form onSubmit={handleEditSubmit}>
            <input name="newTitle" onChange={handleOnChange} value={newTitle}/>
            <button className="btn" onSubmit={handleEditSubmit}>Save</button>
        </form>
    </div>
}

export default BookEdit;