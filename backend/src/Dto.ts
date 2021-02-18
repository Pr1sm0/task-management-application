import { Document, Types } from 'mongoose';

export namespace DTO {
  export type Id = Types.ObjectId;
  export interface IUser {
    name: string;
    photoUrl: string;
    email: string;
  }

  export interface IEmail {
    email: string;
  }

  export interface ITask {
    title: string;
    description: string;
    priority: TaskPriorities;
    statusId: Id;
    assigneeId: Id;
    createdAt: Date;
    updatedAt: Date;
    boardId: Id;
  }

  export interface IStatus {
    title: string;
    boardId: Id;
  }

  export interface IBoard {
    projectId: Id;
  }

  export interface IMember {
    userId: Id;
    role: Roles;
  }

  export interface IProject {
    name: string;
    members: IMember[]
    createdAt: Date;
    creatorId: Id;
  }

  export interface IUserDoc extends IUser, Document {}
  export interface ITaskDoc extends ITask, Document {}
  export interface IStatusDoc extends IStatus, Document {}
  export interface IBoardDoc extends IBoard, Document {}
  export interface IProjectDoc extends IProject, Document {}

  export enum TaskPriorities {
    Highest = 'HIGHEST',
    High = 'HIGH',
    Medium = 'MEDIUM',
    Low = 'LOW',
    Lowest = 'LOWEST',
  }

  export enum Roles {
    User = 'USER',
    Pm = 'PM',
    Dev = 'DEV',
    Admin = 'ADMIN',
  }
}

