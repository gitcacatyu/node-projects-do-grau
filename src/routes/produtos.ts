import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ produtos: ["Banana, maçã e laranja"] })
})

router.post('/', (req, res) => {
    res.json({ produtos: ["Banana, maçã e laranja"] })
      console.log('Params', req.params);
  console.log('Query', req.query);
  console.log('Body', req.body);
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  
})

export default router; 