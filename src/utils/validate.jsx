export const validate = (email, password) => {
  const emailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const passwordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

  if (!emailValid) return " *The email is not valid";
  if (!passwordValid) return "*The password is not valid";

  return null;
};
