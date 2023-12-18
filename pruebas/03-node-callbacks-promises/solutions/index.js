import net from 'node:net';

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
