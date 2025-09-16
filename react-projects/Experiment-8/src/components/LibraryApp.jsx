import { useState } from "react";
import "../App.css";

function LibraryApp({ books: defaultBooks }) {
  const [bookList, setBookList] = useState(defaultBooks);
  const [query, setQuery] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");

  const addBook = () => {
    if (titleInput && authorInput) {
      const newBook = { title: titleInput.trim(), author: authorInput.trim() };
      setBookList([...bookList, newBook]);
      setTitleInput("");
      setAuthorInput("");
    }
  };

  const deleteBook = (indexToRemove) => {
    setBookList(bookList.filter((_, index) => index !== indexToRemove));
  };

  const visibleBooks = bookList.filter(
    (bk) =>
      bk.title.toLowerCase().includes(query.toLowerCase()) ||
      bk.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="library-card">
      <header className="library-header">
        <h1>Library Management</h1>
      </header>

      <div className="library-search">
        <input
          type="text"
          className="search-input"
          placeholder="Search by title or author"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="library-form">
        <input
          type="text"
          className="form-input"
          placeholder="New book title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <input
          type="text"
          className="form-input"
          placeholder="New book author"
          value={authorInput}
          onChange={(e) => setAuthorInput(e.target.value)}
        />
        <button onClick={addBook} className="add-btn">
          Add Book
        </button>
      </div>

      <div className="library-list">
        {visibleBooks.length === 0 ? (
          <p className="empty-msg">No books found.</p>
        ) : (
          visibleBooks.map((book, i) => (
            <div key={i} className="book-item">
              <div>
                <span className="book-title">{book.title}</span>
                <span className="book-author"> by {book.author}</span>
              </div>
              <button
                className="remove-btn"
                onClick={() => deleteBook(i)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LibraryApp;