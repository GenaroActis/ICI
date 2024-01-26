import React, { createContext } from 'react';
import { fetchUrl } from '../config.js';
import { generateNotifyError, generateNotifySuccess } from './Context.jsx'
export const ConfigsContext = createContext();

const ConfigsProvider = ({children}) =>{

    return (
        <ConfigsContext.Provider value={{}}>
        {children}
        </ConfigsContext.Provider>
    )
};

export default ConfigsProvider