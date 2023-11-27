import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit({ onSubmit, book }) {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useContext(BooksContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBookById(book.id, title);
    }

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" onChange={handleChange} value={title} />
            <button type="submit" className="button is-primary">
                Save
            </button>
        </form>
    )
}

export default BookEdit;