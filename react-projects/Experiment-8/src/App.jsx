import LibraryApp from './components/LibraryApp'
import './App.css'

const starterBooks = [
  { title: "1984", author: "George Orwell" },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" }
]

function App() {
  return (
    <div>
      <LibraryApp books={starterBooks} />
    </div>
  )
}

export default App