import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import { generateNotifyError } from '../Context/Context';
import { useParams } from 'react-router-dom';

const Register = () => {
    const { registerToken } = useParams(); 
    const { registerUser } = useContext(UserContext)
    const handleSubmitRegister = (event) => {
        event.preventDefault();
        const password = document.querySelector('#user_password').value
        const passwordConfirm = document.querySelector('#user_password_confirm').value
        if(password === passwordConfirm) {
            const userData = {
                firstName:document.querySelector('#user_firstname').value,
                lastName:document.querySelector('#user_lastname').value,
                email:document.querySelector('#user_email').value,
                password: password,
                dni:document.querySelector('#user_dni').value
            }
            registerUser(registerToken, userData)
            console.log(userData)
        } else generateNotifyError('Las constraseñas deben coincidir!')
    };
    return (
    <>
        <div className='login d-flex justify-content-center flex-column'>
            <div className="text-white py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card d-flex flex-column align-items-center shadow-2-strong">
                            <div className="card-header">
                                <div className="text-header dosEm">Registro</div>
                            </div>
                            <div className="card-body p-4 p-md-5">
                                <form id="formLogin" onSubmit={handleSubmitRegister}>
                                    <div className='d-flex justify-content-center align-items-center flex-column'>
                                        <div className="form-group logInput py-4">
                                            <label htmlFor="firstname">Nombre :</label>
                                            <input required className="form-control" name="firstname" id="user_firstname" type="text"/>
                                        </div>
                                        <div className="form-group logInput py-4">
                                            <label htmlFor="lastName">Apellido :</label>
                                            <input required className="form-control" name="lastName" id="user_lastname" type="text"/>
                                        </div>
                                        <div className="form-group logInput py-4">
                                            <label htmlFor="email">Email :</label>
                                            <input required className="form-control" name="email" id="user_email" type="email"/>
                                        </div>
                                        <div className="form-group logInput py-4">
                                            <label htmlFor="password">Contraseña :</label>
                                            <input required className="form-control" name="password" id="user_password" type="password"/>
                                        </div>
                                        <div className="form-group logInput py-4">
                                            <label htmlFor="password">Confirmar contraseña :</label>
                                            <input required className="form-control" name="password" id="user_password_confirm" type="password"/>
                                        </div>
                                        <div className="form-group logInput py-4">
                                            <label htmlFor="dni">DNI :</label>
                                            <input required className="form-control" name="dni" id="user_dni" type="number"/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center p-4">
                                        <input className="btn buttonLog dosEm" type="submit" value="Registrarse" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </>
    )
}

export default Register