import { getProducts } from '../api/getApi';
import { FilterProducts } from '../components/FilterProducts';
import { Navbar } from '../components/Navbar';

const getData = async () => {
  const data = await getProducts();
  return data;
};

export default async function ItemsPage() {
  const productsData = await getData();
  return (
    <div className='px-4 py-8 sm:px-12'>
      <header className='mb-8'>
        <Navbar />
      </header>
      <main>
        <FilterProducts productsData={productsData} />
      </main>
    </div>
  );
}
