import { createContext, useCallback, useState } from "react";
import axios from 'axios';

const BookContext=createContext();

function Provider({children}){
    const [books,setBooks]=useState([]);

    const fetchBooks=useCallback( async ()=>{
        const response=await axios.get("http://localhost:3001/books");
        setBooks(response.data);
      },[])

      const createBook= async (title)=>{
        const response=await axios.post("http://localhost:3001/books",{
           title
         })
         const updateBooks=[...books,response.data];
         setBooks(updateBooks);
       }
     
       const deleteById=async(id)=>{
         await axios.delete(`http://localhost:3001/books/${id}`)
         const updatedBooksAfterDelete=books.filter((book)=>{
           return book.id!==id;
         })
         setBooks(updatedBooksAfterDelete);
       }
     
       const EditById=async (id,newTitle)=>{
         console.log(id,"now called after edit")
         const response= await axios.put(`http://localhost:3001/books/${id}`,
         {title:newTitle});
     
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