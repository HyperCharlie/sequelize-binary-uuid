import { AbstractDataType } from 'sequelize';
/**
 * BINARY A variable binary string
 *
 * @param {number} [length=255] length of string
 * @param {boolean} [binary=false] Is this binary?
 *
 * @namespace DataTypes.STRING
 *
 */
declare class BINARY implements AbstractDataType {
    protected length: number;
    key: string;
    escape: boolean;
    constructor(length?: number);
    dialectTypes: string;
    toString(options: object): string;
    toSql(): string;
    validate(value: any): boolean;
    stringify(value: any): string;
    _hexify(hex: string): string;
}
export default BINARY;
