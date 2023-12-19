import net from 'node:net';
import fs from 'node:fs';
// import fs from 'node:fs/promises';

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
