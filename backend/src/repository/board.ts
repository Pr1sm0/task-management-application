import { DTO } from '../Dto';
import { Task } from '../models/task';

export class BoardRepository {

  // Update task status

  async updateStatus(ID: DTO.ID, body: DTO.ITask): Promise<DTO.ITaskDoc | null> {
    let statusId = body.statusId;
    const res = await Task.findByIdAndUpdate(ID, { $set: { statusId: statusId } }, { new: true });
    return res;
  }

  async deleteTask(ID: DTO.ID): Promise<JSON | null> {
    const deleteTask = await Task.deleteOne({ _id: ID });
    return deleteTask;
  }
}

export const boardRepository = new BoardRepository();