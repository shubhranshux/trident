const fs = require('fs');
const path = require('path');

const dir1 = 'd:\\OFFICE\\Trident\\temp-app\\src\\components';
const dir2 = 'd:\\OFFICE\\Trident\\temp-app\\src\\pages';

const replacements = {
  '#0F172A': '#3E3A36',
  '#529DD4': '#2C3A8C',
  '#FACC15': '#A59381',
  '#F8FAFC': '#F5EEEC',
  '#E2E8F0': '#EAE0D5'
};

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [oldC, newC] of Object.entries(replacements)) {
        const regex = new RegExp(oldC, 'gi');
        if (regex.test(content)) {
          content = content.replace(regex, newC);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated ' + fullPath);
      }
    }
  }
}

processDir(dir1);
processDir(dir2);
