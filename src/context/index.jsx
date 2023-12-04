import { createContext, useState } from 'react';
import { PropTypes } from 'prop-types';
import { library as books } from '../data/books.json';

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [lectureList, setLectureList] = useState([]);

  const addToLectureList = (book) => {
    const isInList = lectureList.some((b) => b.ISBN === book.ISBN);
    if (isInList) return;
    const newList = [...lectureList, book];
    setLectureList(newList);
  };

  const removeFromLectureList = (book) => {
    const newList = lectureList.filter((b) => b.ISBN !== book.ISBN);
    setLectureList(newList);
  };

  return (
    <BooksContext.Provider
      value={{ books, lectureList, addToLectureList, removeFromLectureList }}
    >
      {children}
    </BooksContext.Provider>
  );
};

BooksContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
