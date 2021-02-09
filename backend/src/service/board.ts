import { BoardRepository, boardRepository } from '../repository/board';
import { DTO } from '../Dto';

class BoardService {
  constructor(private boardRepo: BoardRepository) {}

  // Update task status

  async updateStatus(ID: DTO.ID, body: DTO.ITask): Promise<DTO.ITaskDoc | null> {
    const data = await this.boardRepo.updateStatus(ID, body);
    return data;
  }
}

export const boardService = new BoardService(boardRepository);