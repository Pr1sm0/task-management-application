import { DTO } from '../Dto';
import { Project } from '../models/project';

export class ProjectRepository {

  // Get projects by user id

  async getProjects(userID: DTO.Id): Promise<DTO.IProjectDoc[] | null> {
    const data = await Project.find({ userId: userID })
    .populate('project', ['name', 'creatorId']);
    return data;
  }
}

export const projectRepository = new ProjectRepository();