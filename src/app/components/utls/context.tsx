'use client'
import { Children, createContext, ReactNode, useState } from "react";

interface IProps{
  children:ReactNode
}

export const Context = createContext()

const AppContext = ({children}:IProps) =>{
const [state, setState] = useState(false)

  return(
    <Context.Provider value={{state}}>{Children}</Context.Provider>
  )
}
export default AppContext