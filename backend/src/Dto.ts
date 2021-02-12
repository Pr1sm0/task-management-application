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
    priority: taskPriorities;
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
    email: string;
    role: roles;
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

  export enum taskPriorities {
    HIGHEST = 'HIGHEST',
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW',
    LOWEST = 'LOWEST',
  }

  export enum roles {
    USER = 'USER',
    PM = 'PM',
    DEV = 'DEV',
    ADMIN = 'ADMIN',
  }
}

