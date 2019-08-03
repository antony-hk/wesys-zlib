import fs from 'fs';
import zlib from 'zlib';

const readStream = fs.createReadStream(process.argv[2], {
    start: 0x10,    // Skip header
});

const writeStream = fs.createWriteStream(`${process.argv[2]}_unzlib`);
const inflate = zlib.createInflate();

readStream.pipe(inflate).pipe(writeStream);
