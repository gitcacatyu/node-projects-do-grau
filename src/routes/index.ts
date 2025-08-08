// index.ts
import express from 'express';
import produtosRouter from './produtos';
import voosRouter from './voos';
import  inverferir  from '../middlewares/inverferir'; // <- Importando o middleware

const router = express.Router();

//router.use(inverferir); // <- Usando o middleware

router.use('/produtos', produtosRouter);
router.use('/voos', voosRouter);

router.get('/ping', (req, res) => {
  console.log('Ping received');
  res.json({ pong: true });
});

router.get('/', (req, res) => {
  console.log('Params', req.params);
  console.log('Query', req.query);
  console.log('Body', req.body);
  
  const name = 'Carlos Alberto';
  const age = 12;
  res.json({ name, age });
});

//router.get('/contatos', async (req, res) =>{
  
//})

export default router;
