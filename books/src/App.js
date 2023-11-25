import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
        const updatedbooks = books.filter((book) => {
            return book.id !== id;
        })

        setBooks(updatedbooks);
    };

    const editBookById = (id, title) => {
        const updatedbooks = books.map((book) => {
            if (book.id == id) {
                return {...book, title}
            }

            return book;
        })

        setBooks(updatedbooks);
    };

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
        <div className='app'>
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;