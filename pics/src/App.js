import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';

function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = (term) => {
        setImages(searchImages(term));
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
        </div>
    )
}

export default App;