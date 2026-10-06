import bcrypt from "bcrypt";

export const hashText = async (text, saltRounds) => {
  const hashedText = await bcrypt.hash(text, saltRounds);
  return hashedText;
};

export const compareText = async (text, hashedText) => {
  const isMatch = await bcrypt.compare(text, hashedText);
  return isMatch;
};
