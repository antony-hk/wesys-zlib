import fs from 'fs';
import zlib from 'zlib';

const buf = fs.readFileSync(process.argv[2]);
const iBuf = zlib.inflateSync(buf.slice(0x10));
fs.writeFileSync(`${process.argv[2]}_unzlib`, iBuf);
