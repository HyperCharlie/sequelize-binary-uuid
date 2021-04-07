"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const binary_uuid_1 = __importDefault(require("./define/binary-uuid"));
const virtual_uuid_1 = __importDefault(require("./define/virtual-uuid"));
/*
  A simple preset for default key with virtual field
*/
const DEFAULT_FIELD_OPS = Object.freeze({
    primaryKey: true,
    allowNull: false
});
function withBinaryUUID(definition, ops = {}) {
    const primaryID = ops.primaryID || 'id';
    const virtualID = ops.virtualID || 'uuid';
    const field = !definition && !ops.field ? DEFAULT_FIELD_OPS : ops.field;
    if (definition) {
        if (definition[primaryID]) {
            throw new Error(`[ERROR] | sequelize-binary-uuid | Provided definition collides with binary uuid primaryID defined: ${primaryID}`);
        }
        if (definition[virtualID]) {
            throw new Error(`[ERROR] | sequelize-binary-uuid | Provided definition collides with binary uuid virtualID defined: ${virtualID}`);
        }
    }
    return Object.assign({
        [primaryID]: binary_uuid_1.default(field),
        [virtualID]: virtual_uuid_1.default(primaryID, virtualID)
    }, definition);
}
exports.default = withBinaryUUID;
//# sourceMappingURL=preset.js.map