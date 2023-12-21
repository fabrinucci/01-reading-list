import dotenv from './dotenv.js';
dotenv.config();
// dotenv.config({ path: '.env.local' });

console.log(process.env.PORT); // 8008
console.log(process.env.TOKEN); // 123abc
console.log(process.env.OTHER_TOKEN); // YOtengoUNAnueva_energia
console.log(process.env.API_KEY); // gHJ456sdvf=gh1re654s=gre42821z
