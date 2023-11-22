import React, { createContext } from 'react';
import { fetchUrl } from '../config.js';
import { generateNotifyError, generateNotifySuccess } from './Context.jsx'
export const StudentContext = createContext();

const StudentProvider = ({children}) =>{
    const registerStudent = async (studentData) =>{
        try {
            const response = await fetch(`${fetchUrl}/api/student/register`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: studentData,
            });
            if(response.ok){
                const res = await response.json()
                return res 
            } else {
                const res = await response.json()
                if(res.errors == 'DNIAlreadyRegistered') return generateNotifyError('Ya existe un estudiante con ese DNI!')
            }
        } catch (error) {
            console.log(error)
            throw new Error(error);
        };
    };
    return (
        <StudentContext.Provider value={{registerStudent,}}>
        {children}
        </StudentContext.Provider>
    )
};

export default StudentProvider