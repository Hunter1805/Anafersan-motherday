const fs = require('fs');
const path = require('path');

const files = ['foto1.jpeg', 'foto2.jpeg', 'foto3.jpeg'];
let output = '';

files.forEach((file, index) => {
  const filePath = path.join(__dirname, 'public', file);
  if (fs.existsSync(filePath)) {
    const base64 = fs.readFileSync(filePath, { encoding: 'base64' });
    output += `export const foto${index + 1} = 'data:image/jpeg;base64,${base64}';\n`;
  }
});

fs.writeFileSync(path.join(__dirname, 'src', 'image-data.ts'), output);
console.log('Images converted to base64!');
