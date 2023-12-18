import Image from 'next/image';
import { Product } from '../types';

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { description, title, images, price, rating, stock, brand, category } =
    product;
  return (
    <article className='flex flex-col items-center justify-center'>
      <div className='flex justify-center items-center gap-4'>
        <figure>
          <Image
            className='h-[200px] w-auto aspect-square rounded-full'
            src={images[0]}
            alt={title}
            height={200}
            width={200}
          />
        </figure>
        {images.length > 1 && (
          <div className='flex flex-col gap-2'>
            {images.slice(1).map((img, index) => (
              <figure key={index}>
                <Image
                  className='border-4 border-gray-400 h-[75px] w-auto aspect-square rounded-full'
                  src={img}
                  alt={title}
                  height={75}
                  width={75}
                />
              </figure>
            ))}
          </div>
        )}
      </div>
      <section className='my-8'>
        <div className='flex flex-col gap-4 text-center mb-6'>
          <h2 className='text-2xl font-bold'>{product.title}</h2>
          <div className='flex justify-center items-center gap-4'>
            <p className='text-2xl font-bold'>{price} $</p>
            <span>{rating}</span>
          </div>
          <p>{stock} disponibles</p>
          <p>{brand}</p>
          <span className='mx-auto text-sm p-2 w-32 text-center rounded-md bg-gray-600'>
            {category}
          </span>
        </div>
        <p className='font-extralight text-lg'>{description}</p>
      </section>
      <button className='font-semibold text-lg bg-[#E53C3C] p-4 h-16 w-[250px] rounded-md hover:opacity-80 transition-all'>
        Comprar
      </button>
    </article>
  );
};
