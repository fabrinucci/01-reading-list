import { useContext } from 'react';
import { BooksContext } from '../context';
import style from './BooksList.module.css';

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
