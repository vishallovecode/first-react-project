import { THEME_CHANGER, WORD_COUNT_UPDATE } from ".";

// store

function AppReducer(state , action) {
  switch(action.type) {
    case THEME_CHANGER:
      return  {
        ...state ,
        theme:  {...state.theme ,  ...action.payload}
      }
    case WORD_COUNT_UPDATE: 
      return  {
        ...state ,
        wordlimitCount: action.payload
      }
  }
}
export default AppReducer;