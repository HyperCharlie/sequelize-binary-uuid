"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBinaryUUID = void 0;
const binary_uuid_1 = __importDefault(require("binary-uuid"));
function getBinaryUUID() {
    return binary_uuid_1.default().buffer;
}
exports.getBinaryUUID = getBinaryUUID;
//# sourceMappingURL=binaryUUID.js.map