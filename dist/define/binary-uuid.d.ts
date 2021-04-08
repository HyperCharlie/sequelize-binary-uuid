import { ModelAttributeColumnOptions, Optional } from 'sequelize';
interface BINARYUUIDOPTS extends Optional<ModelAttributeColumnOptions, "type"> {
}
export default function BINARYUUID(props: BINARYUUIDOPTS): ModelAttributeColumnOptions;
export {};
