const reducer = (state, action) => {
  
  switch (action.type) {
    case "SET_FAVORITE":
      if (
        state.mylist.filter((element) => element.id == action.payload.id)
          .length !== 0
      ) {
        return state;
      }
      return {
        ...state,
        mylist: [...state.mylist, action.payload], //payload es el el elemento que vamos a agregar
      };

    case "DELETE_FAVORITE":
      console.log(state.mylist.filter((items) => items.id !== action.payload));
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };

    case "LOGIN_REQUEST":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT_REQUEST":
      return{
        ...state,
        user:action.payload
      }

    case "GET_VIDEO_SOURCE":
      return{
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload)) || state.originals.find(item => item.id === Number(action.payload)) || []
      }

    case "GET_SEARCH":
      
      return {
        ...state,
        search: action.payload
      }
      
    default:
      return state;
  }
};

export default reducer;
