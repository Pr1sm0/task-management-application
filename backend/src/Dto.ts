import { Document } from 'mongoose';

export namespace DTO {
  export interface IUser {
    name: string;
    photoUrl: string;
    email: string;
    role: string;
  }

  export interface IEmail {
    email: string;
  }
  export interface IUserDoc extends IUser, Document {}
}