import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext';
import { generateNotifyError } from '../Context/Context';
import { useParams } from 'react-router-dom';

const Recover = () => {
    const { changePass } = useContext(UserContext)
    const { recoverToken } = useParams(); 
    const handleSubmitChangePass = async (event) => {
        event.preventDefault();
        const password = document.querySelector('#user_password').value
        const passwordConfirm = document.querySelector('#user_password_confirm').value
        if(password === passwordConfirm) {
            const pass = {password: password}
            const res = await changePass(recoverToken, pass)
        } else generateNotifyError('Las constraseñas deben coincidir!')
    };
    return (
        <div className='login d-flex justify-content-center flex-column'>
            <div className="container text-white py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card d-flex flex-column align-items-center shadow-2-strong">
                            <div className="card-header">
                                <div className="text-header dosEm">Reastaurar Contraseña</div>
                            </div>
                            <div className="card-body p-4 p-md-5">
                                <form id="formLogin" onSubmit={handleSubmitChangePass}>
                                    <div className='d-flex justify-content-center align-items-center flex-column'>
                                        <div className="form-group logInput py-4">
                                            <label htmlFor="password">Nueva contraseña :</label>
                                            <input required className="form-control" name="password" id="user_password" type="password"/>
                                        </div>
                                        <div className="form-group logInput py-4">
                                            <label htmlFor="password">Confirmar contraseña :</label>
                                            <input required className="form-control" name="password" id="user_password_confirm" type="password"/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center p-4">
                                        <input className="btn buttonLog dosEm" type="submit" value="Cambiar Contraseña" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Recover