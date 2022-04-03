//Datalayer basically is like a place where all the data of name, songs, playlist and all would be strored

import React, 
{createContext, 
    useContext, 
    useReducer} 
    from "react";

    export const DataLayerContext = createContext();

    //children is the <App/> in the App.js file
    export const DataLayer = ({initialState, reducer, children}) => (
        <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataLayerContext.Provider>
    )

    export const useDataLayerValue = () => useContext(DataLayerContext);