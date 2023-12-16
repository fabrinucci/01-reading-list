import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SearchForm } from './SearchForm';

export const Navbar = () => {
  return (
    <nav className='flex justify-center items-center gap-4'>
      <Link href='/'>
        <Image src='/logo.webp' alt='Logo' width={75} height={75} />
      </Link>
      <SearchForm />
    </nav>
  );
};
