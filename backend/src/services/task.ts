import { TaskRepository, taskRepository } from '../repositories/task';
import { DTO } from '../Dto';

class TaskService {
  constructor(private taskRepo: TaskRepository) {}

  // Get task info

  async getTaskInfoById(id: DTO.Id): Promise<DTO.ITaskDoc | null> {
    const data = await this.taskRepo.getTaskInfoById(id);
    return data;
  }

  // Update task status

  async updateStatus(id: DTO.Id, body: DTO.ITask): Promise<DTO.ITaskDoc | null> {
    const data = await this.taskRepo.updateStatus(id, body);
    return data;
  }

  // Delete task

  async deleteTask(id: DTO.Id): Promise<JSON | null> {
    const data = await this.taskRepo.deleteTask(id);
    return data;
  }
}

export const taskService = new TaskService(taskRepository);