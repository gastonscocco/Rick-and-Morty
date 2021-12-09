import React from 'react'
import '../../Assets/Custom.css'

function Modal(props) {
    const divClassConstan = `bg-white mt-2 p-2 flex flex-col items-center 
                                justify-center rounded-lg shadow-lg `
    
    return (props.trigger)?(
        <div className='bgpop'>
            <div className={props.principalDiv?props.principalDiv:divClassConstan}>
                {props.children}
            </div>
        </div>
    ):'';
}

export default Modal
