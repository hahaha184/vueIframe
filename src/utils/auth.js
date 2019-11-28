export function loginIn(username,user) {
  sessionStorage.setItem(username,user);
}
export function isLogin(username) {
  if (sessionStorage.getItem(username)) {
    return true;
  } else return false;
}
export function LoginOut(username) {
  if (isLogin(username)) {
    sessionStorage.removeItem(username);
    return true;
  } else return false;
}
