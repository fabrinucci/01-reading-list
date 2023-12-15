'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function Home() {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search === '') return;
    router.push(`items/?search=${search.toLowerCase()}`);
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <Image src='/logo.webp' alt='Logo' width={150} height={150} />
      <h1 className='text-4xl'>Bazar Online</h1>
      <form onClick={handleSearch} className='flex flex-col gap-6 mt-6'>
        <input
          onChange={(e) => setSearch(e.target.value)}
          name='search'
          value={search}
          className='p-2 text-black rounded-md'
          type='text'
          placeholder='laptops, smartphones'
        />
        <button className='text-lg bg-[#E53C3C] p-2 h-12 w-full rounded-md hover:opacity-80 transition-all'>
          Buscar
        </button>
      </form>
    </main>
  );
}
