// authUtils.js

export const getUserToken = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? user.token : null;
  };
    
    export const setUserToken = (userData) => {
      localStorage.setItem('user', JSON.stringify(userData));
    };
    
    export const removeUserToken = () => {
      localStorage.removeItem('user');
    };
    console.log("update")