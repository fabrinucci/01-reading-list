import { useContext } from 'react';
import { BooksList } from './components/BooksList';
import { LectureList } from './components/LectureList';
import { BooksContext } from './context';
import { FilterBooks } from './components/FilterBooks';
import style from './App.module.css';

export const App = () => {
  const { totalBooks, filteredBooks, lectureList, selectedGenre } =
    useContext(BooksContext);
  const books = filteredBooks();

  const lectureListGenre = (genre) => {
    const books = lectureList.filter((book) => book.genre === genre);
    return books.length;
  };

  return (
    <main className={style.Main}>
      <h1>{totalBooks - lectureList.length} Libros disponibles</h1>
      <p>{lectureList.length} en la lista de lectura</p>
      {selectedGenre !== 'Todos' && (
        <p>
          {`${
            books.length - lectureListGenre(selectedGenre)
          } Libros disponibles en ${selectedGenre}`}
        </p>
      )}
      <FilterBooks />
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
