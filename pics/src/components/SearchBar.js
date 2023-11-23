import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input onChange={handleTermChange} value={term} id="search-term" />
            </form>
        </div>
    )
}

export default SearchBar;