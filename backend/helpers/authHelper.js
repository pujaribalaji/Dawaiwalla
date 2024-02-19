import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const generateToken = (userId) => {
  return JWT.sign({ _id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
