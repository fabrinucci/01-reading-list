import data from '../data/books.json';
import style from './BooksList.module.css';

export const BooksList = () => {
  const books = data.library;
  return (
    <ul className={style.BooksList}>
      {books.map(({ book }) => (
        <li key={book.ISBN}>
          <figure>
            <img src={book.cover} alt={book.title} />
          </figure>
        </li>
      ))}
    </ul>
  );
};
