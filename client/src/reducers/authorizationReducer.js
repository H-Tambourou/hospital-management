import authService from '../services/auth';

const auth = JSON.parse(window.localStorage.getItem('loggedUser'));
const initialState = auth
  ? { loggedIn: true, currentUser: auth }
  : { loggedIn: false, currentUser: null };

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'AUTHENTICATED': {
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload,
      };
    }
    case 'RETRIEVE_AUTHENTICATION': {
      return {
        ...state,
        loggedIn: true,
        currentUser: action.payload,
      };
    }
    case 'NOT_AUTHENTICATED': {
      return {
        ...state,
        loggedIn: false,
        currentUser: null,
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

export default reducer;
