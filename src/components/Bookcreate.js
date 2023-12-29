import { useState } from "react"
import "../css/bookCreate.css";
import useBooksContext from "../hooks/use-books-context";

function Bookcreate(){

    const {createBook}= useBooksContext();

    const [title,setTitle]=useState('');
    const handleCreateBook=(event)=>{
        event.preventDefault();
        createBook(title);
        setTitle('')
    }
    const handleChange=(event)=>{
        setTitle(event.target.value);
    }
    return (<div className='book-create'>
        <form onSubmit={handleCreateBook} >
        <input value={title} onChange={handleChange} className="input-book-name"/>
        <button type="submit" className="btn-create">create Book</button>
    
        </form></div>)
}

export default Bookcreate