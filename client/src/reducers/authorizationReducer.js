import authService from '../services/auth';

const initialState = {
  loggedIn: false,
  currentUser: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'AUTHENTICATED': {
      return {
        loggedIn: true,
        currentUser: action.payload,
      };
    }
    case 'RETRIEVE_AUTHENTICATION': {
      return {
        loggedIn: true,
        currentUser: action.payload,
      };
    }
    case 'NOT_AUTHENTICATED': {
      return {
        loggedIn: false,
        currentUser: {},
      };
    }
    default:
      return state;
  }
};
// Function for
const setUser = (user) => {
  localStorage.setItem('loggedUser', JSON.stringify(user));
};

// Action creators
export const signupUser = (credentials) => async (dispatch) => {
  const newUser = await authService.signUp(credentials);
  dispatch({
    type: 'NOT_AUTHENTICATED',
    payload: newUser,
  });
};

export const logInUser = (credentials) => async (dispatch) => {
  const user = await authService.login(credentials);
  setUser(user);
  dispatch({
    type: 'AUTHENTICATED',
    payload: user,
  });
};

export const logOut = () => async (dispatch) => {
  window.localStorage.removeItem('loggedUser');
  dispatch({
    type: 'NOT_AUTHENTICATED',
  });
};

export const retrieveUser = (credentials) => async (dispatch) => {
  dispatch({
    type: 'RETRIEVE_AUTHENTICATION',
    payload: credentials,
  });
};

export default reducer;
