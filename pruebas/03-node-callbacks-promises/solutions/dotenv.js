import fs from 'node:fs';

const config = ({ path = '.env' } = {}) => {
  try {
    const content = fs.readFileSync(path, 'utf-8');
    const lines = content.split('\n');

    lines.forEach((line) => {
      const [key, ...value] = line.split('=');
      const joinedValue = value.join('=');
      const hasQuotes = joinedValue.includes('"');
      const valueToStore = hasQuotes
        ? joinedValue.split('"').join('')
        : joinedValue;

      process.env[key] = valueToStore;
    });
  } catch (error) {}
};

const dotenv = {
  config,
};

export default dotenv;
