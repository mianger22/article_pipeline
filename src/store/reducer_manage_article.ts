const defaultState = {
  isSelectArticle: false,
  numberSelectedArticle: 0
}

export const reducerManageArticle = (state = defaultState, action: any) => {
  switch (action.type) {
    case "OPEN_ARTICLE": 
      return {...state, isSelectArticle: true, numberSelectedArticle: action.payload}
    default:
      return state
  }
}