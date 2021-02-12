import { Schema, model } from 'mongoose';
import { DTO } from '../Dto';

const projectSchemaFields: Record<keyof DTO.IProject, any> = {
  name: {
    type: String,
    required: true,
  },
  members: [
    {
      email: { type: String, required: true },
      role: { type: DTO.roles, required: true }
    }
  ],
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  creatorId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
};

const projectSchema = new Schema(projectSchemaFields);

export const Project = model<DTO.IProjectDoc>('Project', projectSchema);