"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const binaryUUID_1 = require("../utils/binaryUUID");
const binary_1 = __importDefault(require("../types/binary"));
function BINARYUUID(props = {}) {
    const defaultValue = props.allowNull || props.defaultValue ? props.defaultValue : () => binaryUUID_1.getBinaryUUID();
    return Object.assign(Object.assign({}, props), { type: new binary_1.default(16), defaultValue });
}
exports.default = BINARYUUID;
//# sourceMappingURL=binary-uuid.js.map