import './App.css';
import {useEffect,useContext} from 'react';

import Bookcreate from './components/Bookcreate';
import BookList from './components/BookList';
import BookContext from './context/books';
function App() {
  
 const {fetchBooks}=useContext(BookContext);

  useEffect(()=>{
    fetchBooks();
  },[fetchBooks])
  
 
useEffect(()=>{
  return ()=>{}
},[])
  

  return (
    <div className="App">
      <Bookcreate   />
      <BookList  />
    </div>
  );
}

export default App;
