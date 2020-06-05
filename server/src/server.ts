import express, { request, response } from 'express';

const app = express();

const users = [
  'Diego',
  'Cleiton',
  'Robson',
  'Daniel'
];

app.get('/users', (request, response) => {
  console.log('listagem de usuários')

  response.json(users);
});

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);

  const user = users[id];

  return response.json(user)
})

app.post('/users', (request, response) => {
  const user = {
    name: 'Diego',
    email: 'bla@bla.com'
  };

  return response.json(user);
})

app.listen(3333);