import React, { useState } from 'react';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Editing from './pages/edeting';
import AboutUs from './pages/aboutUS';
import booksData from './data/books';

function App() {
  const [books, setBooks] = useState(booksData || []);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDeleteBook = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === updatedBook.id ? { ...book, ...updatedBook } : book
      )
    );
  };

  const handleAddBook = (newBook) => {
    const nextId = books.length > 0 ? Math.max(...books.map((book) => book.id)) + 1 : 1;
    const createdBook = { ...newBook, id: nextId };
    setBooks((prevBooks) => [...prevBooks, createdBook]);
    return createdBook;
  };

  return (
   <BrowserRouter>
            
            <NavBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                <Routes>
                  <Route path="/" element={<Home books={books} searchTerm={searchTerm} />} />
                  <Route path="/Home" element={<Home books={books} searchTerm={searchTerm} />} />
                  <Route path="/book/:bookId" element={<BookDetails books={books} onDeleteBook={handleDeleteBook} />} />
                  <Route path="/editing" element={<Editing books={books} onDeleteBook={handleDeleteBook} onUpdateBook={handleUpdateBook} onAddBook={handleAddBook} searchTerm={searchTerm} />} />
                  <Route path="/editing/:bookId" element={<Editing books={books} onDeleteBook={handleDeleteBook} onUpdateBook={handleUpdateBook} onAddBook={handleAddBook} searchTerm={searchTerm} />} />
                  <Route path="/about" element={<AboutUs />} />
                </Routes>

                <Footer />
            </BrowserRouter>
  )
}

export default App;