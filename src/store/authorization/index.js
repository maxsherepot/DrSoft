import { Types } from './actions';

// const initialState = {
//   authData: sessionStorage.getItem('drSoftAuth') ? JSON.parse(sessionStorage.getItem('drSoftAuth')) : null,
// };

const initialState = {
  authData: null,
  loader: false,
  error: false
};


const reducer = (state = initialState, action) => {

  switch (action.type) {
    
    case Types.LOGIN_REQUEST: {
      return {
        ...state,
        loader: true,
        authData: action.payload,
      }
    }
    
    case Types.LOGIN_SUCCESS: {
      console.log("LOGIN_SUCCESS")
      return {
        ...state,
        authData: action.payload,
        loader: false,
      }
    }
    
    case Types.LOGIN_FAILURE: {
      return {
        ...state,
        error: action.payload,
        loader: false,
      }
    }
    
    case Types.CONTINUE_AFTER_FAILURE: {
    console.log("CONTINUE_AFTER_FAILURE")

      return {
        ...state,
        error: false,
      }
    }

    default: return state
  };
};


export default reducer;
