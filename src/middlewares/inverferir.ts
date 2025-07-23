// inverferir.ts
import { RequestHandler } from 'express';

const inverferir: RequestHandler = (req, res, next) => {
  const logged = true; // Aqui você pode implementar a lógica real de verificação de login

  if (logged) {
    next();
  } else {
    res.status(403).json({ error: 'Middleware não permitiu!' });
  }
};

export default inverferir;