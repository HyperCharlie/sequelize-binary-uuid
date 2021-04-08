import { ModelAttributes, Model, ModelAttributeColumnOptions } from "sequelize";
export interface IPresetOptions {
    primaryID?: string;
    virtualID?: string;
    field: ModelAttributeColumnOptions;
}
export default function withBinaryUUID<M extends Model, TCreationAttributes>(definition: ModelAttributes<M, TCreationAttributes>, ops: IPresetOptions): {
    [x: string]: ModelAttributeColumnOptions<Model<any, any>>;
} & ModelAttributes<M, TCreationAttributes>;
