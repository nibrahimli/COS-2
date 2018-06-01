const initialState = {
    user : 'Sinan'  
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return {
          ...state,
          user: action.payload,
        };    
      default:
        return state;
    }
  };
  