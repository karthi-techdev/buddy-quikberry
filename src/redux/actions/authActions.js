export const login = (username, password) => {
    return (dispatch) => {
      if (username === 'Karthi' && password === 'Karthi@123') {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { username },
        });
      } else {
        alert('Invalid credentials');
      }
    };
  };
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  