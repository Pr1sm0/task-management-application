import { ProjectRepository, projectRepository } from '../repositories/project';
import { DTO } from '../Dto';

class ProjectService {
  constructor(private projectRepo: ProjectRepository) {}

  // Get projects by user id

  async getProjects(userId: DTO.Id): Promise<DTO.IProjectDoc[] | null> {
    const data = await this.projectRepo.getProjects(userId);
    return data;
  }
}

export const projectService = new ProjectService(projectRepository);