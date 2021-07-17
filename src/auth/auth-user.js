import * as storage from '../localStorage/storage';

export function verificationUser(formData, stateUsers) {
  const verifyUser = stateUsers.find((user) => user.email === formData.email);
  if (!verifyUser) return { success: false, text: 'пользователя с таким E-mail нет в системе' };
  if (verifyUser.password !== formData.password) {
    return { success: false, text: 'неправильно введен пароль' };
  }
  return { success: true, text: `добро пожаловать на сайт, ${verifyUser.name}` };
}

export function registrationUser(formData, stateUsers) {
  let newUser = stateUsers.find((user) => user.email === formData.email);
  if (newUser) return { success: false, text: 'пользователь с таким E-mail уже есть в системе' };

  newUser = {
    email: formData.email,
    name: formData.name,
    surname: formData.surname,
    password: formData.password,
    role: 'user',
  };

  storage.addNewUser(newUser);

  return { success: true, user: newUser, text: `добро пожаловать на сайт, ${newUser.name}` };
}
