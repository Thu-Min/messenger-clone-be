import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/database";

export class Message extends Model {
  public id!: string;
  public conversation_id!: string;
  public sender_id!: string;
  public content!: string;
  public message_type!: string;
  public attachment_url!: string;
  public status!: string;
  public readonly createdAt!: Date;
}

Message.init(
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

    sender_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },

    content: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    message_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    attachment_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Message",
    tableName: "messages",
    underscored: true,
  }
);

export default Message;
