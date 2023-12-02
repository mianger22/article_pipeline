const defaultState = {
  isAuthed: false
}

export const reducerAuthenticated = (state = defaultState, action: any) => {
  switch (action.type) {
    case "GRANT_ACCESS_TO_USER": 
      return {...state, isAuthed: true}
    case "DENY_USER_ACCESS": 
      return {...state, isAuthed: false}
    default:
      return state
  }
}