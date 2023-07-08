import { User } from '../database/models';

export const registerUser = async (user) => {
    return await User.create(user);
};


export const getUserById = async (id) => {
    return await User.findOne({
      where: {
        [Op.and]: [{ id: id }, { is_active: true }],
      },
      include: [
        {
          model: Role,
          as: 'role',
        },
      ],
    });
  };