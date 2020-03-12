import React, { createContext, useReducer, useContext } from 'react'

const GlobalStateContext = createContext()

const SET_DEMO_MODE = 'SET DEMO MODE'
const UNSET_DEMO_MODE = 'SET DEMO MODE'

const initialState = {
  demoMode: false
}

const globalStateReducer = (state, action) => {
  console.log('WERE HERE', state, action)
  switch(action.type) {
    case SET_DEMO_MODE:
      return {
        ...state,
        demoMode: action.payload.demoMode
      }
    default:
      return state
  }
}

export const GlobalStateProvider = ({children}) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState)

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export const useGlobalState = () => {
  const [state, dispatch] = useContext(GlobalStateContext)
  return {
    setDemoMode: ({demoMode}) => dispatch({
      type: SET_DEMO_MODE,
      payload: {
        demoMode
      }
    }),
    demoMode: state.demoMode
  }
}