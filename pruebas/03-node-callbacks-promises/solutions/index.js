import net from 'node:net';
import fs from 'node:fs';
import fsp from 'node:fs/promises';

// ejercicio 1
export const ping = (ip, callback) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    const response = { time: process.hrtime(startTime), ip };
    callback(null, response);
  });

  client.on('error', (err) => {
    client.end();
    callback(err);
  });
};

ping('midu.dev', (err, info) => {
  if (err) console.error(err);
  console.log(info);
});

// ejercicio 2
export function obtenerDatosPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: 'datos importantes' });
    }, 2000);
  });
}

// ejercicio 3
export function procesarArchivo(callback) {
  const handleWriteFile = (error) => {
    if (error) {
      console.error('Error guardando archivo:', error.message);
      callback(error);
    }

    console.log('Archivo procesado y guardado con éxito');
    callback(null);
  };

  const handleReadFile = (error, contenido) => {
    if (error) {
      console.error('Error leyendo archivo:', error.message);
      callback(error);
    }

    const textoProcesado = contenido.toUpperCase();

    fs.writeFile('output.txt', textoProcesado, handleWriteFile);
  };

  fs.readFile('input.txt', 'utf8', handleReadFile);
}

procesarArchivo(() => {
  console.log('Codigo ejecutado');
});

// ejercicio 3.1
export async function procesarArchivoPromise() {
  let contenido = '';
  try {
    contenido = await fs.promises.readFile('input.txt', 'utf8');
    console.log('Archivo procesado y guardado con éxito');
  } catch (error) {
    console.error('Error leyendo archivo:', error.message);
    throw error;
  }
  const textoProcesado = contenido.toUpperCase();

  try {
    await fs.promises.writeFile('output.txt', textoProcesado);
  } catch (error) {
    console.error('Error guardando archivo:', error.message);
    throw error;
  }
}

await procesarArchivoPromise();

// ejercicio 4

export function leerArchivosSync() {
  console.time('leer archivos');
  const archivo1 = fs.readFileSync('archivo1.txt', 'utf8');
  const archivo2 = fs.readFileSync('archivo2.txt', 'utf8');
  const archivo3 = fs.readFileSync('archivo3.txt', 'utf8');

  console.timeEnd('leer archivos');

  return `${archivo1} ${archivo2} ${archivo3}`;
}

const text = leerArchivosSync();
console.log(text);

// ejercicio 4.1
export async function leerArchivos() {
  try {
    console.time('leer archivos');
    const archivo1 = await fsp.readFile('archivo1.txt', 'utf8');
    const archivo2 = await fsp.readFile('archivo2.txt', 'utf8');
    const archivo3 = await fsp.readFile('archivo3.txt', 'utf8');

    console.timeEnd('leer archivos');

    return `${archivo1} ${archivo2} ${archivo3}`;
  } catch (error) {
    console.log(error);
  }
}

const text2 = await leerArchivos();
console.log(text2);

// ejercicio 4.2
export async function leerArchivosPromiseAll() {
  try {
    console.time('leer archivos');
    const [archivo1, archivo2, archivo3] = await Promise.all([
      fsp.readFile('archivo1.txt', 'utf8'),
      fsp.readFile('archivo2.txt', 'utf8'),
      fsp.readFile('archivo3.txt', 'utf8'),
    ]);

    console.timeEnd('leer archivos');
    return `${archivo1} ${archivo2} ${archivo3}`;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const text3 = await leerArchivosPromiseAll();
console.log(text3);

// ejercicio 5
export async function delay(time) {
  console.time('Time');
  return new Promise((resolve) => setTimeout(resolve, time));
}
delay(3000).then(() => console.log('Hola mundo'));
