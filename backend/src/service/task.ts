import { TaskRepository, taskRepository } from '../repository/task';
import { DTO } from '../Dto';

class TaskService {
  constructor(private taskRepo: TaskRepository) {}

  // Update task status

  async updateStatus(id: DTO.Id, body: DTO.ITask): Promise<DTO.ITaskDoc | null> {
    const data = await this.taskRepo.updateStatus(id, body);
    return data;
  }

  async deleteTask(id: DTO.Id): Promise<JSON | null> {
    const data = await this.taskRepo.deleteTask(id);
    return data;
  }
}

export const taskService = new TaskService(taskRepository);