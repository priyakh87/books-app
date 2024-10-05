import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../css/bookList.css";
import axios from "axios";

function SearchResults() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("query"); // Get query from URL
    const [searchResults, setSearchResults] = useState([]);
    const [favorites, setFavorites] = useState({});

       
    const handleSetFavorite = (bookId) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [bookId]: !prevFavorites[bookId]
        }));
    }

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            searchQuery,
          )}`,
        );
        if (response.data.items) {
          setSearchResults(response.data.items);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.log("Error fetching the books you searched for", error);
      }
    };
    fetchSearchResults();
  }, [searchQuery]);

  return (
    <div className='container'>
      <div className='book-list'>
        <h2>Results for "{searchQuery}"</h2>
        <br />
        <div className='row'>
          {searchResults.length > 0 ? (
            searchResults.map((book, index) => (
              // <p>{book.title}</p>
              <div className='book-show card w-card' key={index}>
                <div className=' list-card'>
                  <h3 className='book-title'>{book.volumeInfo.title}</h3>
                  <h5 className='book-author'>
                    {book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(", ")
                      : "Unknown Author"}
                  </h5>
                  {book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? (
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                    />
                  ) : (
                    <div className="no-img">No Image Available</div>
                  )}
                </div>
                <div className='actions'>
                        <button onClick={()=>handleSetFavorite(book.id)} className="btn btn-favorite">
                        {favorites[book.id] ? (
                       <i className = 'ri-heart-fill'></i>
                    ) : (
                                   
                                    <i className='ri-heart-line'></i>
                    )}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No results found. Try searching for something else.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
