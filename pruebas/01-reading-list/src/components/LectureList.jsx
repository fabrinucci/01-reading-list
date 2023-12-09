import { useContext } from 'react';
import { BooksContext } from '../context';
import style from './LectureList.module.css';

export const LectureList = () => {
  const { lectureList, removeFromLectureList } = useContext(BooksContext);
  return (
    <ul className={style.LectureList}>
      {lectureList.map((book) => (
        <li key={book.ISBN}>
          <figure>
            <img
              onClick={() => removeFromLectureList(book)}
              src={book.cover}
              alt={book.title}
            />
          </figure>
        </li>
      ))}
    </ul>
  );
};
