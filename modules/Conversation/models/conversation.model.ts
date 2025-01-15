import { Model, DataTypes } from "sequelize";
import sequelize from "../../../config/database";
import Participant from "../../Participant/models/participant.model";
import Message from "../../Messages/models/message.model";

export class Conversation extends Model {
  public id!: string;
  public is_group!: boolean;
  public group_name!: string;
  public group_picture!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Conversation.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    is_group: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    group_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    group_picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Conversation",
    tableName: "conversations",
  }
);

Conversation.hasMany(Participant, { foreignKey: "conversation_id" });
Participant.belongsTo(Conversation, { foreignKey: "conversation_id" });

Conversation.hasMany(Message, { foreignKey: "conversation_id" });
Message.belongsTo(Conversation, { foreignKey: "conversation_id" });

export default Conversation;
