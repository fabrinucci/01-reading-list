import { Products } from '../types';

const PRODUCTS_URL = 'http://localhost:4000/';

export const getProducts = async () => {
  const res = await fetch(PRODUCTS_URL);
  const data: Products = await res.json();
  return data.products;
};

export const getProduct = async (id: number) => {
  const data = await getProducts();
  const product = data.find((item) => item.id === id);
  if (!product) return;
  return product;
};
