import { getProducts } from '../api/getApi';
import { FilterProducts } from '../components/FilterProducts';

const getData = async () => {
  const data = await getProducts();
  return data;
};

export default async function ItemsPage() {
  const productsData = await getData();
  return (
    <main className='px-4 py-8 sm:py-24 sm:px-12'>
      <h2 className='mb-10 text-center font-semibold text-gray-300 text-xl'>
        Resultados de búsqueda de smart: 12
      </h2>
      <FilterProducts productsData={productsData} />
    </main>
  );
}
