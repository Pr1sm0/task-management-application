import { DTO } from '../Dto';
import { User } from '../models/user';

export class UserRepository {
  // Login & Register
  async createUser(newUser: DTO.IUser): Promise<DTO.IUserDoc> {
    const user = new User(newUser);
    const res = await user.save();
    return res;
  }

  async checkUserByEmail(email: string): Promise<DTO.IUserDoc | null> {
    const data = await User.findOne({ email: email });
    return data;
  }
}

export const userRepository = new UserRepository();