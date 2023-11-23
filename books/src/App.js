import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        const updatedbooks = [...books, 
            {
                id: Math.round(Math.random() * 9999), 
                title
            }
        ];

        setBooks(updatedbooks);
    }

    return (
        <div>
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;