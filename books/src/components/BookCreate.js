import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookCreate() {
    const [title, setTitle] = useState('');
    const { createBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
    };

    return (
        <div className='book-create'>
            <h3>Add a book</h3>
            <form id="book-create-form" onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" onChange={handleChange} value={title} />
                <button className='button'>Create!</button>
            </form>
        </div>
    )
}

export default BookCreate;