import { User} from '../Action/Action';

const initialState = {
 User : []
};

export default Reducer = (state = initialState, action) => {
  console.log('in reducer', action);
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      console.log('in reducer', action.payload);
      return {
        User : [...state.User, action.payload]
      };

    case 'CLEAR':
      return{
        User:[]
      };

    default:
      return state;
  }
};
