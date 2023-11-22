import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

const Login = () => {
    // const { login, registerGithub, sendRecoverPassEmail  } = useContext(UserContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmitLogin = (event) => {
        event.preventDefault();
        const email = document.querySelector('#email').value
        const password = document.querySelector('#password').value
        // login(email, password)
        console.log(email, password)
    };
    const handleSubmitRecoverPass = async (event) => {
        event.preventDefault();
        const email = document.querySelector('#recoverEmail').value
        // const res = await sendRecoverPassEmail(email)
        // if(res) handleClose()
        console.log(email)
    };
    return (
    <>
    <div className='login d-flex justify-content-center flex-column'>
        <div className="container text-white py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
                <div className="col-12">
                    <div className="card shadow-2-strong">
                        <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 text-black pb-2 pb-md-0 mb-md-5 dosEm">Inicio de sesion</h3>
                            <form id="formLogin" onSubmit={handleSubmitLogin}>
                                <div className="row">
                                    <div className="col-md-6 mb-4 d-flex py-5 align-items-center">
                                        <div className="form-outline w-100">
                                            <label htmlFor="email" className="form-label unEm text-black">Email</label>
                                            <input required placeholder='Email' type="email" name="email" className="form-control dosEm form-control-lg" id="email" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4 d-flex py-5 align-items-center">
                                        <div className="form-outline">
                                            <label className="form-label unEm text-black" htmlFor="password">Contraseña</label>
                                            <input required placeholder='Contraseña' type="password" name="password" id="password" className="form-control dosEm form-control-lg" />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center p-4">
                                    <input className="btn buttonLog dosEm" type="submit" value="Login" />
                                </div>
                            </form>
                            <Button className='buttonLog unEm' variant="primary" onClick={handleShow}>
                                Olvide mi contraseña
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header className='mod-header' closeButton>
                                    <Modal.Title className='bg-white rounded'>Recuperar contraseña</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <label className="form-label" htmlFor="recoverEmail">Email</label>
                                    <input required placeholder='Email' type="email" name="recoverEmail" id="recoverEmail" className="form-control form-control-lg" />
                                </Modal.Body>
                                <Modal.Footer className='mod-footer'>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
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