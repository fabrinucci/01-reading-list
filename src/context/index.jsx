import { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';
import { library as books } from '../data/books.json';

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [counterPages, setCounterPages] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState('Todos');
  const [lectureList, setLectureList] = useState(
    JSON.parse(localStorage.getItem('books')) || [],
  );

  const filteredBooks = () => {
    // No filter
    if (counterPages === 0 && selectedGenre === 'Todos') return books;

    // Filter by genre
    if (counterPages === 0 && selectedGenre !== 'Todos')
      return books.filter(({ book }) => book.genre === selectedGenre);

    // Filter by pages
    if (counterPages !== 0 && selectedGenre === 'Todos')
      return books.filter(({ book }) => book.pages >= counterPages);

    // Filter by pages and genre
    if (counterPages !== 0 && selectedGenre !== 'Todos') {
      const filterBooksByCounter = books.filter(
        ({ book }) => book.pages >= counterPages,
      );
      return filterBooksByCounter.filter(
        ({ book }) => book.genre === selectedGenre,
      );
    }
  };

  const updateCounterPages = (e) => {
    setCounterPages(e.target.value);
  };

  const updateSelectedGenre = (value) => {
    setSelectedGenre(value);
  };

  const addToLectureList = (book) => {
    const isInList = lectureList.some((b) => b.ISBN === book.ISBN);
    if (isInList) return;
    localStorage.setItem('books', JSON.stringify([...lectureList, book]));
    setLectureList(JSON.parse(localStorage.getItem('books')));
  };

  const removeFromLectureList = (book) => {
    const newList = lectureList.filter((b) => b.ISBN !== book.ISBN);
    localStorage.setItem('books', JSON.stringify(newList));
    setLectureList(JSON.parse(localStorage.getItem('books')));
  };

  const totalBooks = books.length;

  return (
    <BooksContext.Provider
      value={{
        totalBooks,
        lectureList,
        counterPages,
        selectedGenre,
        filteredBooks,
        updateCounterPages,
        addToLectureList,
        removeFromLectureList,
        updateSelectedGenre,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

BooksContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
