import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/database";

export class Participant extends Model {
  public id!: string;
  public conversation_id!: string;
  public user_id!: string;
  public role!: string;
  public joined_at!: Date;
}

Participant.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    conversation_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    joined_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Participant",
    tableName: "participants",
    underscored: true,
  }
);

export default Participant;
