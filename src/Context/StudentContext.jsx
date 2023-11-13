import React, { createContext } from 'react';
import { fetchUrl } from '../config.js';
import { generateNotifyError, generateNotifySuccess } from './Context.jsx'
export const StudentContext = createContext();

const StudentProvider = ({children}) =>{
    const registerStudent = async (studentData) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/student`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: studentData,
            });
            if(response.ok){
                const res = await response.json()
                return res
            }
        } catch (error) {
            throw new Error(error);
        };
    };
    return (
        <StudentProvider.Provider value={{registerStudent}}>
        {children}
        </StudentProvider.Provider>
    )
};