import bcrypt from 'bcrypt';
export const invalidPasswordError = async(password, user) => {
    const passwordDb = user.password;
    const valid = await bcrypt.compare(password, passwordDb);
    if (!valid) {
      return {
        message: 'Invalid username or password',
        code: 'USER_NOT_VALID_PASSWORD',
      };
    }
  };
  