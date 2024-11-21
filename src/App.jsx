import { useState } from 'react'
import BookForm from './components/BookForm'
import BookItem from './components/BookItem'

function App() {
  const [books, setBooks] = useState([])

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  return (
    <>
    <h1>Book List</h1>
      <BookForm onAddBook={addBook} />
      <div className="book-list">
        {books.map((book, index) => (
          <BookItem
            key={index}
            title={book.title}
            description={book.description}
          />
        ))}
      </div>
    </>
  )
}

export default App
