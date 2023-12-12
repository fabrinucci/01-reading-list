import express, { Express, Request, Response } from 'express';
import productsData from './data/products.json';

const app: Express = express();
const PORT = 4000;

app.get('/', (req: Request, res: Response) => {
  res.json(productsData);
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = productsData.products.find(
    (product) => product.id === parseInt(productId)
  );
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(PORT, () => {
  console.log(`App listen at http://localhost:${PORT}`);
});
