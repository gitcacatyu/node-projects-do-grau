import { readFile, unlink,  writeFile} from 'fs/promises';

const exec = async () => {
  await unlink('src/teste.txt');
}

exec()