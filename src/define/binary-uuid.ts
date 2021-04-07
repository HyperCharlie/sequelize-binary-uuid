import { getBinaryUUID } from '../utils/binaryUUID';
import BINARY from '../types/binary';
import { ModelAttributeColumnOptions } from 'sequelize';

export default function BINARYUUID(props: any = {}): ModelAttributeColumnOptions {
  const defaultValue =
    props.allowNull || props.defaultValue ? props.defaultValue : () => getBinaryUUID();
  return {
    ...props,
    type: new BINARY(16),
    defaultValue
  };
}
