import React from 'react'

const Accordion = () => {
    return (
    <>
    <div className='card' id='accordion'>
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <div className="accordion-header d-flex flex-column flex-md-row">
                    <div>
                        <h1 className='text-center text-titulo'>Viajes Internacionales</h1>
                        <h4 className='text-descr p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</h4>
                    </div>
                    <div className='col-6 col-md-5 col-lg-4 col-xxl-3 d-flex flex-column align-items-center'>
                        <img className='img-fluid' src="https://res.cloudinary.com/dsdicaf5h/image/upload/v1680551268/ici/anglia_dropdown_jtzazl.png" alt="" />
                    </div>
                </div>
                <button className="accordion-button collapsed d-block text-center" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Leer mas...
                </button>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p className='text-accordion'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Viajes Anglia 
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Accordion