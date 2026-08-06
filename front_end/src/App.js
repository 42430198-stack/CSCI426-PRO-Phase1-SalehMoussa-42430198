import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter , Navigate, Route , Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar'
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Editing from './pages/editing';
import AboutUs from './pages/aboutUS';
import Login from './pages/Login';
import MyBooks from './pages/MyBooks';

const getApiBaseUrl = () => {
  const configuredBase = process.env.REACT_APP_API_BASE_URL || process.env.REACT_APP_BOOKS_API_URL;
  if (configuredBase) {
    return configuredBase.replace(/\/$/, '');
  }

  return process.env.NODE_ENV === 'development' ? 'http://localhost:5000/api' : '/api';
};

const normalizeGenres = (genresValue) => {
  const cleanGenres = (items) => {
    const normalized = items
      .map((item) => {
        if (typeof item === 'string') {
          return item.trim();
        }

        if (item && typeof item === 'object') {
          if (typeof item.name === 'string') {
            return item.name.trim();
          }
          if (typeof item.genre === 'string') {
            return item.genre.trim();
          }
        }

        return '';
      })
      .filter(Boolean);

    return Array.from(new Set(normalized));
  };

  if (Array.isArray(genresValue)) {
    return cleanGenres(genresValue);
  }

  if (typeof genresValue === 'string') {
    const trimmed = genresValue.trim();

    if (!trimmed) {
      return [];
    }

    if (trimmed.startsWith('[')) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) {
          return cleanGenres(parsed);
        }
      } catch (error) {
        return [];
      }
    }

    if (trimmed.includes(',')) {
      return cleanGenres(trimmed.split(','));
    }

    return [trimmed];
  }

  return [];
};

const normalizeBook = (book) => ({
  ...book,
  genres: normalizeGenres(book?.genres),
});

function App() {
  const [books, setBooks] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('isAuthenticated') === 'true');
  const [userRole, setUserRole] = useState(() => sessionStorage.getItem('userRole') || 'user');
  const [userId, setUserId] = useState(() => {
    const stored = sessionStorage.getItem('userId');
    return stored ? Number(stored) : null;
  });

  useEffect(() => {
    const loadBooks = async () => {
      const apiCandidates = [
        process.env.REACT_APP_BOOKS_API_URL,
        process.env.REACT_APP_API_BASE_URL,
        getApiBaseUrl(),
      ].filter(Boolean);

      for (const api of apiCandidates) {
        const normalizedApi = api.endsWith('/books') ? api : `${api.replace(/\/$/, '')}/books`;

        try {
          const response = await axios.get(normalizedApi);
          const payload = Array.isArray(response.data)
            ? response.data
            : (Array.isArray(response.data?.books) ? response.data.books : []);

          setBooks(payload.map(normalizeBook));
          return;
        } catch (error) {
        }
      }
    };

    loadBooks();
  }, []);
  const [searchTerm, setSearchTerm] = useState('');

  const booksApiUrl = `${getApiBaseUrl()}/books`;

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`${booksApiUrl}/${bookId}`);
    } catch (error) {
      console.error('Failed to delete book:', error);
    }
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  const handleUpdateBook = async (updatedBook) => {
    try {
      await axios.put(`${booksApiUrl}/${updatedBook.id}`, updatedBook);
    } catch (error) {
      console.error('Failed to update book:', error);
    }
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

  const handleLogin = (email, role = 'user', id = null) => {
    sessionStorage.setItem('isAuthenticated', 'true');
    sessionStorage.setItem('loggedInEmail', email);
    sessionStorage.setItem('userRole', role);
    if (id != null) sessionStorage.setItem('userId', String(id));
    setIsAuthenticated(true);
    setUserRole(role);
    setUserId(id);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAuthenticated');
    sessionStorage.removeItem('loggedInEmail');
    sessionStorage.removeItem('userRole');
    sessionStorage.removeItem('userId');
    setSearchTerm('');
    setIsAuthenticated(false);
    setUserRole('user');
    setUserId(null);
  };

  const routerBasename = process.env.PUBLIC_URL || '';

  return (
   <BrowserRouter basename={routerBasename}>

            {isAuthenticated ? <NavBar searchTerm={searchTerm} onSearchChange={setSearchTerm} onLogout={handleLogout} userRole={userRole} /> : null}

                <Routes>
                  <Route path="/" element={isAuthenticated ? <Navigate to="/Home" replace /> : <Login onLogin={handleLogin} />} />
                  <Route path="/login" element={isAuthenticated ? <Navigate to="/Home" replace /> : <Login onLogin={handleLogin} />} />
                  <Route path="/Home" element={isAuthenticated ? <Home books={books} searchTerm={searchTerm} /> : <Navigate to="/login" replace />} />
                  <Route path="/book/:bookId" element={isAuthenticated ? <BookDetails books={books} userId={userId} userRole={userRole} /> : <Navigate to="/login" replace />} />
                  <Route path="/mybooks" element={isAuthenticated && userRole !== 'admin' ? <MyBooks userId={userId} /> : <Navigate to="/Home" replace />} />
                  <Route path="/editing" element={isAuthenticated ? (userRole === 'admin' ? <Editing books={books} onDeleteBook={handleDeleteBook} onUpdateBook={handleUpdateBook} onAddBook={handleAddBook} searchTerm={searchTerm} /> : <Navigate to="/Home" replace />) : <Navigate to="/login" replace />} />
                  <Route path="/editing/:bookId" element={isAuthenticated ? (userRole === 'admin' ? <Editing books={books} onDeleteBook={handleDeleteBook} onUpdateBook={handleUpdateBook} onAddBook={handleAddBook} searchTerm={searchTerm} /> : <Navigate to="/Home" replace />) : <Navigate to="/login" replace />} />
                  <Route path="/about" element={isAuthenticated ? <AboutUs /> : <Navigate to="/login" replace />} />
                  <Route path="*" element={<Navigate to={isAuthenticated ? '/Home' : '/login'} replace />} />
                </Routes>

                {isAuthenticated ? <Footer /> : null}
            </BrowserRouter>
  )
}

export default App;