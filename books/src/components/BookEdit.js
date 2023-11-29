import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ onSubmit, book }) {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useBooksContext();

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