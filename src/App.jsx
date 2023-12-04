import { BooksList } from './components/BooksList';
import { LectureList } from './components/LectureList';
import style from './App.module.css';

export const App = () => {
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
          <LectureList />
        </section>
      </div>
    </main>
  );
};
