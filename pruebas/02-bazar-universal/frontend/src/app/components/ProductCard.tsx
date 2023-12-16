import Image from 'next/image';
import { Product } from '../types';

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { description, title, images, price, rating, stock } = product;
  return (
    <article className='flex flex-col items-center justify-center'>
      <figure>
        <Image
          className='h-[250px] w-[250px] rounded-full'
          src={images[0]}
          alt={title}
          height={300}
          width={300}
        />
      </figure>
      <section className='my-8'>
        <div className='text-center mb-6'>
          <h2 className='text-2xl font-bold mb-4'>{product.title}</h2>
          <div className='flex justify-center items-center gap-6 mb-4'>
            <p className='text-2xl font-bold'>{price} $</p>
            <span>{rating}</span>
          </div>
          <p>{stock} disponibles</p>
        </div>
        <p className='font-extralight text-lg'>{description}</p>
      </section>
      <button className='font-semibold text-lg bg-[#E53C3C] p-4 h-16 w-[250px] rounded-md hover:opacity-80 transition-all'>
        Comprar
      </button>
    </article>
  );
};
