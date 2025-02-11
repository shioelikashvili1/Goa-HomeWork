const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'leevel101');

try {

  fs.mkdirSync(basePath, { recursive: true });


  ['classwork', 'homework'].forEach(folder => {
    const folderPath = path.join(basePath, folder);
    fs.mkdirSync(folderPath, { recursive: true });
    fs.writeFileSync(path.join(folderPath, 'file.txt'), 'Hello, this is file.txt');
  });

  console.log('Folders and files created successfully!');
} catch (error) {
  console.error('Error creating folders and files:', error);
}
