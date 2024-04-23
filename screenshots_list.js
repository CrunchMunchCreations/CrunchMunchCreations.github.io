import fs from 'fs';
import path from 'path';
import * as blurhash from 'blurhash';

fs.writeFileSync('./public/screenshots/screenshots.json', JSON.stringify(fs.readdirSync('./public/screenshots').filter(a => a.endsWith('.png'))));

/*let mappings = {};

for (const file of fs.readdirSync('./public', { recursive: true })) {
    if (!file.endsWith('.png'))
        continue;

    const filePath = path.resolve('./public', file);

    const png = UPNG.decode(fs.readFileSync(filePath));
    const hash = blurhash.encode(new Uint8ClampedArray(png.data), png.width, png.height, 4, 4);

    mappings[file.replace(/\\/g, '/')] = hash;
}

fs.writeFileSync('./public/hashes.json', JSON.stringify(mappings));*/