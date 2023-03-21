import React from "react";

const EntryContext = React.createContext(null)

export default function EntryContextProvider({children}){
    const value = "selam"
    return (
        <EntryContext.Provider value={value}>
            {children}
        </EntryContext.Provider>
    )
}

export const useEntryContext = () => React.useContext(EntryContext)