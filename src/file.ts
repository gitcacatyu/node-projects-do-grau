import { writeFile } from 'fs/promises';

const exec = async () => {
  console.log('Escrevendo arquivo teste.txt');
  await writeFile('./test.txt', 'Testando 1,2,3!');
  console.log('Pronto');
};

exec();
