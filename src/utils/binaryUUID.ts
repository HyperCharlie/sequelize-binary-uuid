import createBinaryUUID from 'binary-uuid';

export function getBinaryUUID(): Buffer {
  return createBinaryUUID().buffer;
}
