import { DTO } from '../Dto';
import { User } from '../models/user';

export class UserRepository {
  // Login & Register
  async createUser(newUser: DTO.IUser): Promise<DTO.IUserDoc> {
    const user = new User(newUser);
    const res = await user.save();
    return res;
  }

  async checkUserByEmail(email: DTO.IEmail): Promise<DTO.IUserDoc | null> {
    const newEmail = email.email;
    const data = await User.findOne({ email: newEmail });
    return data;
  }
}

export const userRepository = new UserRepository();