import bcrypt from 'bcrypt';
export const genHashPassword = async (password) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};
