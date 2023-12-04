import data from '../data/books.json';
import style from './LectureList.module.css';

export const LectureList = () => {
  const books = data.library;
  return (
    <ul className={style.LectureList}>
      {books.slice(1, 4).map(({ book }) => (
        <li key={book.ISBN}>
          <figure>
            <img src={book.cover} alt={book.title} />
          </figure>
        </li>
      ))}
    </ul>
  );
};
