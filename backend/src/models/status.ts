import { Schema, model } from 'mongoose';
import { DTO } from '../Dto';

const statusSchemaFields: Record<keyof DTO.IStatus, any> = {
  title: {
    type: String,
    required: true,
  },
  boardId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Board',
    required: true 
  },
};

const statusSchema = new Schema(statusSchemaFields);

export const Status = model<DTO.IStatusDoc>('Status', statusSchema);