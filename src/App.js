import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Bookcreate from './components/Bookcreate';
import BookList from './components/BookList';
import BookContext from './context/books';
import BookDetails from './components/BookDetails';
import SearchResults from './components/SearchResults';
import Header from './components/Header';

function App() {
 const {fetchBooks}=useContext(BookContext);

  useEffect(()=>{
    fetchBooks();
  },[fetchBooks])
  
 
  

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<BookList />} />
          <Route path='/create' element={<Bookcreate />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path='/books/:id' element={<BookDetails />} />
          <Route path="*" render={()=> <h2>404 not found</h2>} />
        </Routes>      
      </div>
      </Router>
  );
}

export default App;
