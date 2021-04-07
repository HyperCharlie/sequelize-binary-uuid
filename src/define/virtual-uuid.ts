import Sequelize, { ModelAttributeColumnOptions } from 'sequelize';
import { fromBinaryUUID } from 'binary-uuid';

function attachStringUUID(instance: Sequelize.Model<any, any>, binaryID: string, stringID: string) {
  const buf = instance.getDataValue(binaryID);
  if (!buf) return null;
  const uuid = fromBinaryUUID(buf);
  instance.setDataValue(stringID, uuid);
  return uuid;
}

export default function VIRTUALBINARYUUID(binaryID: string = 'id', stringID: string = 'uuid'): ModelAttributeColumnOptions {
  return {
    type: new Sequelize.DataTypes.VIRTUAL(Sequelize.DataTypes.STRING, [binaryID]),
    get() {
      return this.getDataValue(stringID) || attachStringUUID(this, binaryID, stringID);
    }
  };
}
