import { Types } from './actions';



const initialState = {
  skans: null,
  loader: false,
  error: false
};


const reducer = (state = initialState, action) => {

  switch (action.type) {

    case Types.SKANS_REQUEST: {
      console.log("SKANS_REQUEST");

      return {
        ...state,
        loader: true,
        skans: action.payload,
      }
    }

    case Types.SKANS_SUCCESS: {
      console.log("SKANS_SUCCESS");

      return {
        ...state,
        skans: action.payload,
        loader: false,
      }
    }

    case Types.SKANS_FAILURE: {
      console.log("SKANS_FAILURE");

      return {
        ...state,
        error: action.payload,
        loader: false,
      }
    }

    default: return state
  };
};


export default reducer;