import bcrypt from 'bcrypt';
import User from '../../User/models/user.model';
import { generateToken } from '../../../utils/jwt.utils';

export const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
    status: 'online',
  });

  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = generateToken(user.id);
  return { user, token };
};
