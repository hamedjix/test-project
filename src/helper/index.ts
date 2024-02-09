// Authorize
export const LocalStoragChecker = () => {
  return localStorage.getItem("sgr-logged") ? true : false;
};
export const localStorageManage = (flag: boolean, token?: string) => {
  if (flag && token) {
    localStorage.setItem("pr-token", token);
    return;
  }
  localStorage.removeItem("pr-token");
};
