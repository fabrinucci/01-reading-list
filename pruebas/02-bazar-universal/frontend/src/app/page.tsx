import Image from 'next/image';
import { SearchForm } from './components/SearchForm';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <Image src='/logo.webp' alt='Logo' width={150} height={150} />
      <h1 className='text-center text-4xl'>Bazar Online</h1>
      <section className='mt-6'>
        <SearchForm />
      </section>
    </main>
  );
}
