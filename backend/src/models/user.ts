import { Schema, model } from 'mongoose';
import { DTO } from '../Dto';

const userSchemaFields: Record<keyof DTO.IUser, any> = {
  name: {
    type: String,
    required: true,
    trim: true
  },
  photoUrl: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
};

const userSchema = new Schema(userSchemaFields);

export const User = model<DTO.IUserDoc>('User', userSchema);