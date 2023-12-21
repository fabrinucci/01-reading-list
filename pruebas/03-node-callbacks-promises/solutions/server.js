import express from 'express';
export const app = express();

const PORT = 4000;

app.use(express.json());

const items = [
  {
    id: 1,
    content: 'Item 1',
  },
];

app.get('/', (req, res) => {
  return res.json('hello world');
});

app.get('/items', (req, res) => {
  return res.json(items);
});

app.get('/items/:id', (req, res) => {
  const findItem = items.find((item) => item.id === Number(req.params.id));
  return res.json(findItem);
});

app.post('/items', (req, res) => {
  const { content } = req.body;
  const id = items.length + 1;
  const newItem = {
    id,
    content,
  };
  items.push(newItem);
  return res.json(newItem);
});

app.put('/items/:id', (req, res) => {
  const { content } = req.body;
  const itemFound = items.find((item) => item.id === Number(req.params.id));
  itemFound.content = content;
  return res.json(itemFound);
});

app.delete('/items/:id', (req, res) => {
  const foundIndex = items.findIndex(
    (item) => item.id === Number(req.params.id)
  );
  items.splice(foundIndex, 1);
  return res.status(200).json();
});

export const server = app.listen(PORT, () => {
  console.log(`App listen at: http://localhost:${PORT}`);
});
