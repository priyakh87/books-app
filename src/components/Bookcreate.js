import React from 'react';
import { useState } from "react"
import "../css/bookCreate.css";
import useBooksContext from "../hooks/use-books-context";

function Bookcreate(){

    const {createBook}= useBooksContext();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleCreateBook=(event)=>{
        event.preventDefault();
        createBook(title,author);
        setTitle('');
        setAuthor('');
    }
    const handleChange=(event)=>{
        setTitle(event.target.value);
        
    }
    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
     }
    
    return (
        <div className='m-50'>
        <div className='book-create '>
        <form onSubmit={handleCreateBook} >
            <input value={title} onChange={handleChange} className="input-book-name form-control" />
            <input value={author} onChange={handleChangeAuthor} className="input-book-author form-control" />
            <br/>
        <button type="submit" className="btn-create">create Book</button>
    
                </form></div>
                </div>)
}

export default Bookcreate