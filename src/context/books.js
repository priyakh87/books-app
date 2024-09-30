import React from 'react';
import { createContext, useCallback, useState } from "react";
import axios from 'axios';

const BookContext=createContext();

function Provider({children}){
    const [books,setBooks]=useState([]);

    const fetchBooks=useCallback( async ()=>{
        const response=await axios.get("/api/books");
        setBooks(response.data);
      },[])

      const createBook= async (title, author)=>{
        const response=await axios.post("/api/books",{
           title,author
         })
         const updateBooks=[...books,response.data];
         setBooks(updateBooks);
       }
     
       const deleteById=async(id)=>{
         await axios.delete(`/api/books/${id}`)
         const updatedBooksAfterDelete=books.filter((book)=>{
           return book.id!==id;
         })
         setBooks(updatedBooksAfterDelete);
       }
     
       const EditById=async (id,newTitle,newAuthor)=>{
         console.log(id,"now called after edit")
         const response= await axios.put(`/api/books/${id}`,
         {title:newTitle, author:newAuthor});
     
         const updateBookAfterEdit=books.map((book)=>{
           if(book.id===id){
            return  {...book, ...response.data};
           }
     
           return book;
         });
         setBooks(updateBookAfterEdit);
       }

       const ContextValue={
        books,
        createBook,
        deleteById,
        EditById,
        fetchBooks
       }


    return <BookContext.Provider value={ContextValue}>
        {children}
    </BookContext.Provider>
}

export {Provider}
export default BookContext;