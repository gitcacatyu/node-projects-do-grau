import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ produtos: ["Banana, maçã e laranja"] })
})


router.get('/:id', (req, res) => {
  const { id } = req.params;

   
})

export default router; 