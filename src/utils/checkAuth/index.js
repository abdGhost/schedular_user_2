export const checkAuth = () => {
  if (!localStorage.getItem("token")) {
    return false;
  }
  return true;
};
