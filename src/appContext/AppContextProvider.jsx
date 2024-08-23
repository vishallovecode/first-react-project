import { useReducer, useState } from "react"
import { AppContext, initialState } from "."
import AppReducer from "./reducer";

export const AppContextProvider = (props)=>{
  // store data
  const  [state , dispatch] = useReducer(AppReducer , initialState);

  // const [state , setState] = useState('')
  //
  return (
    <AppContext.Provider value ={{state , dispatch}}>
      {props.children}
    </AppContext.Provider>
  )
}