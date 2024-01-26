import React, { useContext, useState } from 'react'
import { UserContext } from '../Context/UserContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Login = () => {
    const { loginUser,  sendRecoverPassEmail } = useContext(UserContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmitLogin = async (event) => {
        event.preventDefault();
        const email = document.querySelector('#user_email').value
        const password = document.querySelector('#user_password').value
        const userData = {
            email: email,
            password: password
        }
        await loginUser(userData)
    };
    const handleSubmitRecoverPass = async (event) => {
        event.preventDefault();
        const email = document.querySelector('#recoverEmail').value
        const body = {email: email}
        const res = await sendRecoverPassEmail(body)
        if(res.data == 'sentSuccessfully') handleClose()
    };
    return (
    <>
    <div className='login d-flex justify-content-center flex-column'>
        <div className="container text-white py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-12">
                    <div className="card shadow-2-strong">
                        <div className="card-header">
                            <div className="text-header dosEm">Inicio de sesion</div>
                        </div>
                        <div className="card-body">
                            <form id="formLogin" onSubmit={handleSubmitLogin}>
                                <div className="row">
                                    <div className="d-flex justify-content-center justify-center py-5 align-items-center">
                                        <div className="form-group logInput">
                                                <label htmlFor="email">Email :</label>
                                                <input required className="form-control" name="email" id="user_email" type="email"/>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center py-5 align-items-center">
                                        <div className="form-group logInput">
                                            <label htmlFor="password">Contraseña :</label>
                                            <input required className="form-control" name="password" id="user_password" type="password"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center p-4">
                                    <input className="btn buttonLog dosEm" type="submit" value="Login" />
                                </div>
                            </form>
                            <Button className='buttonLog mt-5 unYmedioEm' variant="primary" onClick={handleShow}>
                                Olvide mi contraseña
                            </Button>
                            <Modal className='modalLog' show={show} onHide={handleClose}>
                                <Modal.Header className='mod-header' closeButton>
                                    <Modal.Title className='bg-white unEm rounded'>Recuperar contraseña</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className='form-group logInput'>
                                    <label className="form-label" htmlFor="recoverEmail">Email</label>
                                    <input required placeholder='Email' type="email" name="recoverEmail" id="recoverEmail" className="form-control form-control-lg" />
                                </Modal.Body>
                                <Modal.Footer className='mod-footer'>
                                <Button className='buttonLog unYmedioEm' onClick={handleClose}>
                                    Cerrar
                                </Button>
                                <Button className='buttonLog unYmedioEm' onClick={handleSubmitRecoverPass}>
                                    Enviar mail
                                </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    </>
    )
}

export default Login