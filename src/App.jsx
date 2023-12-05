import { useContext } from 'react';
import { BooksList } from './components/BooksList';
import { LectureList } from './components/LectureList';
import { BooksContext } from './context';
import style from './App.module.css';

export const App = () => {
  const { books, lectureList } = useContext(BooksContext);

  return (
    <main className={style.Main}>
      <h1>{books.length - lectureList.length} Libros disponibles</h1>
      <p>{lectureList.length} en la lista de lectura</p>
      <div className={style.Container}>
        <section className={style.BooksSection}>
          <BooksList />
        </section>
        <section className={style.LectureSection}>
          <h2>Lista de Lectura</h2>
          {lectureList.length === 0 ? (
            <p>No hay libros agregados</p>
          ) : (
            <LectureList />
          )}
        </section>
      </div>
    </main>
  );
};
