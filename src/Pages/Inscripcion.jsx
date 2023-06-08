import React from 'react'
import "../sass/inputs.css"

const Inscripcion = () => {
    return (
        <>
        <div id='inputs'>
            <div className='col-11 col-sm-10 col-md-9 col-lg-6 col-xl-5 card'>
                <div className="card-header">
                    <div className="text-header">Inscripcion</div>
                </div>
                <div className="card-body">
                    <form action="#">
                    <div className="form-group">
                        <label htmlFor="user_name">Nombre :</label>
                        <input required="" className="form-control" name="user_name" id="user_name" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_surname">Apellido :</label>
                        <input required="" className="form-control" name="user_surname" id="user_surname" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_email">Email :</label>
                        <input required="" className="form-control" name="user_email" id="user_email" type="email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_date">Fecha de Nacimiento :</label>
                        <input required="" className="form-control" name="user_date" id="user_date" type="date"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_address">Dirección :</label>
                        <input required="" className="form-control" name="user_address" id="user_address" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_phone">Teléfono :</label>
                        <input required="" className="form-control" name="user_phone" id="user_phone" type="tel"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_level">Nivel Anterior (solo si curso antes) :</label>
                        <input required="" className="form-control" name="user_level" id="user_level" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_phone">Observaciones Medicas :</label>
                        <input required="" className="form-control" name="user_phone" id="user_phone" type="tel"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_time">Preferencia de Cursado :</label>
                        <div className="wrapper">
                            <input type="radio" name="select1" id="option-1" value="mañana"/>
                            <input type="radio" name="select1" id="option-2" value="tarde"/>
                            <label htmlFor="option-1" className="option option-1">
                                <div className="dot"></div>
                                <span>Mañana</span>
                                </label>
                            <label htmlFor="option-2" className="option option-2">
                                <div className="dot"></div>
                                <span>Tarde</span>
                            </label>
                        </div>
                        <label className='mt-4' htmlFor="user_time">Metodo de Pago :</label>
                        <div className="wrapper">
                            <input type="radio" name="select2" id="option-3" value="efectivo"/>
                            <input type="radio" name="select2" id="option-4" value="transferencia"/>
                            <label htmlFor="option-3" className="option option-3">
                                <div className="dot"></div>
                                <span>Efectivo</span>
                                </label>
                            <label htmlFor="option-4" className="option option-4">
                                <div className="dot"></div>
                                <span>Transferencia</span>
                            </label>
                        </div>
                    </div>
                        <input type="submit" className="btn2" value="Inscribirse"/>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Inscripcion