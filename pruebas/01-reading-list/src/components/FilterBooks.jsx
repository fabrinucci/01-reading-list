import { useContext } from 'react';
import { genreBooks } from '../utils';
import style from './FilterBooks.module.css';
import { BooksContext } from '../context';

export const FilterBooks = () => {
  const {
    selectedGenre,
    counterPages,
    updateCounterPages,
    updateSelectedGenre,
  } = useContext(BooksContext);

  return (
    <section className={style.FilterContainer}>
      <div className={style.FilterPages}>
        <h3>Filtrar por páginas</h3>
        <div>
          <input
            onChange={(e) => {
              updateCounterPages(e);
            }}
            value={counterPages}
            type='range'
            min='0'
            max='800'
          />
          <p>{counterPages} páginas</p>
        </div>
      </div>
      <div className={style.FilterGenre}>
        <h3>Filtrar por género</h3>
        <select
          value={selectedGenre}
          onChange={(e) => {
            const options = [...e.target.selectedOptions];
            const value = options.map((option) => option.value);
            updateSelectedGenre(value.toString());
          }}
        >
          {genreBooks.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};
