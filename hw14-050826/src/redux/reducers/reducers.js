import { SET_USER_INFO } from '../actions/actions';

const initialState = {
   name: 'John Doe',
  status: 'online', 
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;