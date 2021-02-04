import { Schema, model } from 'mongoose';
import { DTO } from '../Dto';

const taskSchemaFields: Record<keyof DTO.ITask, any> = {
  title: {
    type: String,
    required: true,
  },
  description: String,
  priority: {
    type: DTO.taskPriorities,
    required: true,
  },
  statusId: { 
    type: Schema.Types.ObjectId,
    ref: 'Status', 
    required: true 
  },
  assigneeId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  },
  boardId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Board',
    required: true 
  },
};

const taskSchema = new Schema(taskSchemaFields);

export const Task = model<DTO.ITaskDoc>('Task', taskSchema);