import React from 'react'

interface AppContextInterface {
    switchBackground: ()=> void,
}


export const Context = React.createContext<AppContextInterface | null>(null)
