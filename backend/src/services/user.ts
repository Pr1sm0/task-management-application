import { UserRepository, userRepository } from '../repositories/user';
import { DTO } from '../Dto';

class UserService {
  constructor(private userRepo: UserRepository) {}
  // User login
  async createUser(newUser: DTO.IUser): Promise<DTO.IUserDoc> {
    const data = await this.userRepo.createUser(newUser);
    return data;
  }

  async checkUserByEmail(email: DTO.IEmail): Promise<DTO.IUser | null> {
    const data = await this.userRepo.checkUserByEmail(email);
    return data;
  }

  async getUserInfoById(userId: DTO.Id): Promise<DTO.IUser | null> {
    const data = await this.userRepo.getUserInfoById(userId);
    return data;
  }
}

export const userService = new UserService(userRepository);