const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      }

      case 'GET_REPOS':
      return{
        ...state,
        repos:action.payload,
        isLoading:false
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      }

    case 'CLEAR_USERS':
      return {
        ...state,
        users: [],
      }
    default:
      return state
  }
}

export default GithubReducer
