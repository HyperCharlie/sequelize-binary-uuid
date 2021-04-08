import { getBinaryUUID } from '../utils/binaryUUID';
import BINARY from '../types/binary';
import { ModelAttributeColumnOptions, Optional } from 'sequelize';

interface BINARYUUIDOPTS extends Optional<ModelAttributeColumnOptions, "type"> {}

export default function BINARYUUID(props: BINARYUUIDOPTS): ModelAttributeColumnOptions {
  const defaultValue =
    props.allowNull || props.defaultValue ? props.defaultValue : () => getBinaryUUID();
  return {
    ...props,
    type: new BINARY(16),
    defaultValue
  };
}
