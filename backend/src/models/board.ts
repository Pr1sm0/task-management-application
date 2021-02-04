import { Schema, model } from 'mongoose';
import { DTO } from '../Dto';

const boardSchemaFields: Record<keyof DTO.IBoard, any> = {
  title: {
    type: String,
    required: true,
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  },
  creatorId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
};

const boardSchema = new Schema(boardSchemaFields);

export const Board = model<DTO.IBoardDoc>('Board', boardSchema);