'use client';
import React from 'react';
import { Product } from '../types';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

type Props = {
  productsData: Product[];
};

export const FilterProducts = ({ productsData }: Props) => {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const getProductsBySearch = (search: string | null) => {
    if (!search) return productsData;
    return productsData.filter((item) => item.category === search);
  };
  const products = getProductsBySearch(search);
  return (
    <ul className='grid grid-cols-1 lg:grid-cols-2'>
      {products.map((item) => (
        <li
          className='flex justify-between gap-6 py-[40px] mx-auto cursor-pointer'
          key={item.id}
        >
          <figure>
            <Image
              className='h-[150px] w-[150px] rounded-full'
              src={item.images[0]}
              alt={item.title}
              height={200}
              width={200}
            />
          </figure>
          <section className='flex flex-col max-w-xs gap-3'>
            <h3 className='font-semibold text-lg'>{item.title}</h3>
            <p>{item.description}</p>
            <div className='flex items-center justify-between'>
              <p className='text-2xl font-bold'>{item.price} $</p>
              <span>{item.rating}</span>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
};
