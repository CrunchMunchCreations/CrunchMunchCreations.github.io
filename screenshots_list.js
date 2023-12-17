import fs from 'fs';

fs.writeFileSync('./public/screenshots/screenshots.json', JSON.stringify(fs.readdirSync('./public/screenshots').filter(a => a.endsWith('.png'))));