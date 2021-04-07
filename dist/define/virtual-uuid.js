"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const binary_uuid_1 = require("binary-uuid");
function attachStringUUID(instance, binaryID, stringID) {
    const buf = instance.getDataValue(binaryID);
    if (!buf)
        return null;
    const uuid = binary_uuid_1.fromBinaryUUID(buf);
    instance.setDataValue(stringID, uuid);
    return uuid;
}
function VIRTUALBINARYUUID(binaryID = 'id', stringID = 'uuid') {
    return {
        type: new sequelize_1.default.DataTypes.VIRTUAL(sequelize_1.default.DataTypes.STRING, [binaryID]),
        get() {
            return this.getDataValue(stringID) || attachStringUUID(this, binaryID, stringID);
        }
    };
}
exports.default = VIRTUALBINARYUUID;
//# sourceMappingURL=virtual-uuid.js.map