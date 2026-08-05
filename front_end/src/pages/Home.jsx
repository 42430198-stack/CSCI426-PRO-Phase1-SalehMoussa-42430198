import React, { useMemo, useState } from "react";
import '../Style/home.css'
import BookCard from "../components/book_card.jsx";

export default function Home({ books ,searchTerm }) {

    const [selectedGenre, setSelectedGenre] = useState("all");
    const bookList = useMemo(() => books || [], [books]);
    const normalizedSearch = (searchTerm || '').trim().toLowerCase();

    const availableGenres = useMemo(() => {
        const genresSet = new Set();

        bookList.forEach((book) => {
            (book.genres || []).forEach((genre) => {
                if (genre) {
                    genresSet.add(genre);
                }
            });
        });

        return ["all", ...Array.from(genresSet).sort((a, b) => a.localeCompare(b))];
    }, [bookList]);

    const filteredByGenre = selectedGenre === "all"
        ? bookList
        : bookList.filter((book) => (book.genres || []).includes(selectedGenre));

    const filteredBooks = filteredByGenre.filter((book) => {
        if (!normalizedSearch) {
            return true;
        }

        const nameText = (book.name || '').toLowerCase();
        const publisherText = (book.publisher || '').toLowerCase();
        const genresText = (book.genres || []).join(' ').toLowerCase();

        return nameText.includes(normalizedSearch)
            || publisherText.includes(normalizedSearch)
            || genresText.includes(normalizedSearch);
    });

    return (
        <div className="home-page">
            <div className="genres-selection">
                {availableGenres.map((genre) => (
                    <button
                        key={genre}
                        type="button"
                        className={`genre-button ${selectedGenre === genre ? "active" : ""}`}
                        onClick={() => setSelectedGenre(genre)}
                    >
                        {genre === "all" ? "All" : genre}
                    </button>
                ))}
            </div>
            <div className="home-container">
                {filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    )
}