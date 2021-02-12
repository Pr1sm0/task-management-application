import { Schema, model } from 'mongoose';
import { DTO } from '../Dto';

const boardSchemaFields: Record<keyof DTO.IBoard, any> = {
  projectId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Project',
    required: true 
  },
};

const boardSchema = new Schema(boardSchemaFields);

export const Board = model<DTO.IBoardDoc>('Board', boardSchema);