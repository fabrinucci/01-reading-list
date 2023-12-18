import { redirect } from 'next/navigation';
import { getProduct } from '@/app/api/getApi';
import { Navbar } from '@/app/components/Navbar';
import { ProductCard } from '@/app/components/ProductCard';

interface Props {
  params: { id: string };
}

export default async function ItemsPage({ params }: Props) {
  const product = await getProduct(Number(params.id));
  return (
    <div className='px-4 py-8 sm:px-12'>
      <header className='mb-8'>
        <Navbar />
      </header>
      <main>
        {!product ? redirect('/') : <ProductCard product={product} />}
      </main>
    </div>
  );
}
