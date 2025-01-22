import User from '../models/user.model';

export const getUserById = async (id: string) => {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });

  if (!user) {
    throw new Error('User not found');
  }

  return user;
};

export const updateUser = async (id: string, data: any) => {
  const user = await User.findOne({ where: { id } });

  if (!user) {
    throw new Error('User not found');
  }

  await user.update(data);

  return user;
};
