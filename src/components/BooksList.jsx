import { useContext } from 'react';
import style from './BooksList.module.css';
import { BooksContext } from '../context';

export const BooksList = () => {
  const { books, addToLectureList } = useContext(BooksContext);

  return (
    <ul className={style.BooksList}>
      {books.map(({ book }) => (
        <li key={book.ISBN}>
          <figure>
            <img
              onClick={() => addToLectureList(book)}
              src={book.cover}
              alt={book.title}
            />
          </figure>
        </li>
      ))}
    </ul>
  );
};
