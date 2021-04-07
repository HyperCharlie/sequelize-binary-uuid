"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
const sequelize_1 = __importDefault(require("sequelize"));
/**
 * BINARY A variable binary string
 *
 * @param {number} [length=255] length of string
 * @param {boolean} [binary=false] Is this binary?
 *
 * @namespace DataTypes.STRING
 *
 */
class BINARY {
    constructor(length = 255) {
        this.length = length;
        this.key = "BINARY";
        this.escape = false;
    }
    toString(options) {
        throw new Error('Method not implemented.');
    }
    toSql() {
        return `BINARY(${this.length})`;
    }
    validate(value) {
        if (!Buffer.isBuffer(value) && typeof value !== 'number') {
            throw new sequelize_1.default.ValidationError(util_1.default.format('%j is not a valid binary buffer', value));
        }
        return true;
    }
    stringify(value) {
        if (!Buffer.isBuffer(value)) {
            if (Array.isArray(value)) {
                value = Buffer.from(value);
            }
            else {
                value = Buffer.from(value.toString());
            }
        }
        const hex = value.toString('hex');
        return this._hexify(hex);
    }
    ;
    _hexify(hex) {
        return `X'${hex}'`;
    }
}
exports.default = BINARY;
//# sourceMappingURL=binary.js.map