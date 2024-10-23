import React, { useContext, useEffect, useState } from "react";

import Bookcreate from './Bookcreate';
import BookList from './BookList';
import BookContext from '../context/books';
import BookDetails from './BookDetails';
import SearchResults from './SearchResults';
import Login from './Login';
import Signup from './Signup';
import { Route, Routes } from "react-router-dom";

export default function BookRoutes() {
    const {fetchBooks}=useContext(BookContext);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
      fetchBooks();
    },[fetchBooks])
    
  return <>
      <div className="main">
        <Routes>
          {!isLoggedIn && <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />}
          {!isLoggedIn && <Route path='/signup' element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />}
          <Route path='/' element={<BookList />} />
          <Route path='/create' element={<Bookcreate />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path='/books/:id' element={<BookDetails />} />
          <Route path="*" render={()=> <h2>404 not found</h2>} />
        </Routes> 
        </div>
    </>
}