import { Document, Types } from 'mongoose';

export namespace DTO {
  export type ID = Types.ObjectId;
  export interface IUser {
    name: string;
    photoUrl: string;
    email: string;
    role: string;
  }

  export interface IEmail {
    email: string;
  }

  export interface ITask {
    title: string;
    description: string;
    priority: taskPriorities;
    statusId: ID;
    assigneeId: ID;
    createdAt: Date;
    updatedAt: Date;
    boardId: ID;
  }

  export interface IUserDoc extends IUser, Document {}
  export interface ITaskDoc extends ITask, Document {}

  export enum taskPriorities {
    HIGHEST = 'HIGHEST',
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
    LOWEST = 'LOWEST',
  }
}

