import { BooksList } from './components/BooksList';
import style from './App.module.css';

export const App = () => {
  return (
    <main className={style.Main}>
      <h1>Libros disponibles</h1>
      <section>
        <BooksList />
      </section>
    </main>
  );
};
