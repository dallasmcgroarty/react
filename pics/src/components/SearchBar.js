import { useState } from 'react';

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
        <div className="search-container">
            <form onSubmit={handleFormSubmit}>
                <input onChange={handleTermChange} value={term} id="search-term" />
                <button>Click me</button>
            </form>
        </div>
    )
}

export default SearchBar;