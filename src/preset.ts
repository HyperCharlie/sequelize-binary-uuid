import BINARYUUID from './define/binary-uuid';
import VIRTUALBINARYUUID from './define/virtual-uuid';
import {ModelAttributes, Model, ModelAttributeColumnOptions} from "sequelize";

/*
  A simple preset for default key with virtual field
*/

export interface IPresetOptions {
  primaryID?: string;
  virtualID?: string;
  field: ModelAttributeColumnOptions
}

export default function withBinaryUUID<M extends Model, TCreationAttributes>(definition: ModelAttributes<M, TCreationAttributes>, ops: IPresetOptions) {
  const primaryID = ops.primaryID || 'id';
  const virtualID = ops.virtualID || 'uuid';
  if (definition) {
    if (definition.hasOwnProperty(primaryID)) {
      throw new Error(
        `[ERROR] | sequelize-binary-uuid | Provided definition collides with binary uuid primaryID defined: ${primaryID}`
      );
    }
    if (definition.hasOwnProperty(virtualID)) {
      throw new Error(
        `[ERROR] | sequelize-binary-uuid | Provided definition collides with binary uuid virtualID defined: ${virtualID}`
      );
    }
  }
  return Object.assign(
    {
      [primaryID]: BINARYUUID(ops.field),
      [virtualID]: VIRTUALBINARYUUID(primaryID, virtualID)
    },
    definition
  );
}
