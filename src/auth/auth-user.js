import * as storage from '../localStorage/storage';

export function verificationUser(formData, stateUsers) {
  const allUsers = mergeUsers(stateUsers);
  const verifyUser = allUsers.find((user) => user.email === formData.email);
  if (!verifyUser) return { success: false, text: 'пользователя с таким E-mail нет в системе' };
  if (verifyUser.password !== formData.password) {
    return { success: false, text: 'неправильно введен пароль' };
  }
  return { success: true, text: `добро пожаловать на сайт, ${verifyUser.name}` };
}

export async function getDummyUsers() {
  const response = await fetch('/users.json');
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}

function mergeUsers(stateUsers) {
  const storageUsers = storage.getNewUsers();
  const isUsers = storageUsers ? JSON.parse(storageUsers) : [];
  isUsers.push(...stateUsers);
  return isUsers;
}
