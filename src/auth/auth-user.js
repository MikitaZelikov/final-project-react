import * as storage from '../localStorage/storage';

let users; // stateUsers(from dummy file) + localStorageUsers(new register users)

export function verificationUser(formData) {
  const verifyUser = users.find((user) => user.email === formData.email);
  if (!verifyUser) return { success: false, text: 'пользователя с таким E-mail нет в системе' };
  if (verifyUser.password !== formData.password) {
    return { success: false, text: 'неправильно введен пароль' };
  }
  return { success: true, text: `добро пожаловать на сайт, ${verifyUser.name}` };
}

export function registrationUser(formData) {
  let newUser = users.find((user) => user.email === formData.email);
  if (newUser) return { success: false, text: 'пользователь с таким E-mail уже есть в системе' };
  newUser = {
    email: formData.email,
    name: formData.name,
    surname: formData.surname,
    password: formData.password,
    role: 'user',
  };
  storage.addNewUser(newUser);
  users.push(newUser);
  return { success: true, text: `добро пожаловать на сайт, ${newUser.name}` };
}

export async function getDummyUsers() {
  const response = await fetch('/users.json');
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}

export function mergeUsers(stateUsers) {
  const storageUsers = storage.getNewUsers();
  if (!storageUsers) localStorage.setItem('newUsers', JSON.stringify([]));
  const isUsers = storageUsers ? JSON.parse(storageUsers) : [];
  isUsers.push(...stateUsers);
  users = isUsers;
  // eslint-disable-next-line no-console
  console.log(users);
}
