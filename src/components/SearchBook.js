import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../css/search.css';

function SearchBook() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();  // Use navigate for redirection

    const handleOnChangeSearch = (event) => {
        setSearchQuery(event.target.value);
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}`);
            if (response.data.items) {
                setSearchResults(response.data.items);
                navigate(`/search?query=${searchQuery}`);  // Redirect to search results page with query
            } else {
                setSearchResults([]);
            }
        } catch (error) {
            console.log('Error fetching the books you searched for', error);
        }
    }

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 150) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const DynamicClass = scrolled ? 'fixed' : '';

    return (
        <div className="search-content">
        <div className="w-100">
             <div >
            <form onSubmit={handleSearch}>
                <div className={`flex bg-white search ${DynamicClass} `}>
                    <i className="ri-search-line"></i>
                    <input
                        className="form-control p-2 border-0"
                        type="text"
                        name="search_input"
                        id="search_input"
                        placeholder="Search your book"
                        value={searchQuery}
                        onChange={handleOnChangeSearch}
                    />
                </div>
                </form>
                </div>
            </div>
            </div>
    );
}

export default SearchBook;