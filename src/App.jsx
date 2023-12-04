import { BooksList } from './components/BooksList';
import { LectureList } from './components/LectureList';
import style from './App.module.css';
import { useContext } from 'react';
import { BooksContext } from './context';

export const App = () => {
  const { lectureList } = useContext(BooksContext);

  return (
    <main className={style.Main}>
      <h1>6 Libros disponibles</h1>
      <p>2 en la lista de lectura</p>
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
