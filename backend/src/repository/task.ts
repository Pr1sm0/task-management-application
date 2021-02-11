import { DTO } from '../Dto';
import { Task } from '../models/task';

export class TaskRepository {

  // Update task status

  async updateStatus(id: DTO.Id, body: DTO.ITask): Promise<DTO.ITaskDoc | null> {
    let statusId = body.statusId;
    const res = await Task.findByIdAndUpdate(id, { $set: { statusId: statusId } }, { new: true });
    return res;
  }

  async deleteTask(id: DTO.Id): Promise<JSON | null> {
    const deleteTask = await Task.deleteOne({ _id: id });
    return deleteTask;
  }
}

export const taskRepository = new TaskRepository();