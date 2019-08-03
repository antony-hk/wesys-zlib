import fs from 'fs';
import zlib from 'zlib';

const buf = fs.readFileSync(process.argv[2]);
const dBuf = zlib.deflateSync(buf, {
    level: 9,
    windowBits: 15,
});

const header = Buffer.alloc(0x10);
// First 3 bytes
// header.writeUInt8(0x00, 0x00);
// header.writeUInt8(0x01, 0x01);
// header.writeUInt8(0x01, 0x02);
header.writeUInt8(0xFF, 0x00);
header.writeUInt8(0x10, 0x01);
header.writeUInt8(0x81, 0x02);

Buffer.from('WESYS', 'utf8').copy(header, 0x03);
header.writeUInt32LE(dBuf.length, 0x08);
header.writeUInt32LE(buf.length, 0x0C);

fs.writeFileSync(`${process.argv[2]}_unzlib_zlib`, Buffer.concat([header, d]));
