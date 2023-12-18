'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export const SearchForm = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search === '') return;
    router.push(`/items/?search=${search.toLowerCase()}`);
    setSearch('');
  };
  return (
    <form
      onClick={handleSearch}
      className='flex flex-col sm:flex-row items-center gap-4'
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        name='search'
        value={search}
        className='p-2 text-black rounded-md'
        type='text'
        placeholder='laptops, smartphones'
      />
      <button className='text-lg bg-[#E53C3C] p-2 h-12 w-[150px] sm:w-full rounded-md hover:opacity-80 transition-all'>
        Buscar
      </button>
    </form>
  );
};
