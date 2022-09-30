const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
const getUserName = state => state.auth.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetchingCurrent,
};
export default authSelectors;
