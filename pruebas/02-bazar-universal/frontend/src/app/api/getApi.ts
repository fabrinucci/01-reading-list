import { Products } from '../types';

const PRODUCTS_URL = 'http://localhost:4000/';

export const getProducts = async () => {
  const res = await fetch(PRODUCTS_URL);
  const data: Products = await res.json();
  return data.products;
};
