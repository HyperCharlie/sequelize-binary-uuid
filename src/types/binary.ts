import util from 'util';

import Sequelize, { AbstractDataType } from 'sequelize';

/**
 * BINARY A variable binary string
 *
 * @param {number} [length=255] length of string
 * @param {boolean} [binary=false] Is this binary?
 *
 * @namespace DataTypes.STRING
 *
 */
class BINARY implements AbstractDataType {
  public key: string;
  public escape: boolean;
  constructor(protected length: number = 255) {
    this.key = "BINARY";
    this.escape = false;
  }
  dialectTypes: string;
  
  toString(options: object): string {
    throw new Error('Method not implemented.');
  }

  public toSql(): string {
    return `BINARY(${this.length})`;
  }

  public validate(value: any) {
    if (!Buffer.isBuffer(value) && typeof value !== 'number') {
      throw new Sequelize.ValidationError(
        util.format('%j is not a valid binary buffer', value)
      );
    }
    return true;
  }

  public stringify(value: any) {
    if (!Buffer.isBuffer(value)) {
      if (Array.isArray(value)) {
        value = Buffer.from(value);
      } else {
        value = Buffer.from(value.toString());
      }
    }
    const hex = value.toString('hex');

    return this._hexify(hex);
  };

  public _hexify(hex: string): string {
    return `X'${hex}'`;
  }
}

export default BINARY;
