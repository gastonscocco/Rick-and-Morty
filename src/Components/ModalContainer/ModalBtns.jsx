import React from 'react'
import Button from "@material-tailwind/react/Button";

function ModalBtns(props) {
    const textActive = `text-blue-400 font-medium tracking-widest 
                        duration-700`
    const textDisactive = `text-gray-500 font-medium tracking-widest 
                            duration-700 cursor-not-allowed`

                            // confirmButtonColor: '#a0dcdc',
                            // cancelButtonColor: '#e4e28b',
    return (
        <div>
            <div className='flex justify-around w-96'>
                    <Button color={props.disabled?'gray':'blue'}
                            className={props.disabled?'cursor-not-allowed':''}
                            buttonType="link"
                            size="lg"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="dark"
                            disabled={props.disabled}
                            onClick={props.onSuccess}
                        >
                        <span  className={props.disabled?textDisactive:textActive}
                            >{props.textBtn?props.textBtn:'Buscar'}</span>
                    </Button>
                    <Button color='orange'
                            buttonType="link"
                            size="lg"
                            rounded={false}
                            block={false}
                            iconOnly={false}
                            ripple="dark"
                            onClick={props.onCancel}
                        >
                        <span  className='text-orange-500 font-medium tracking-widest
                                        duration-700'
                            >Cancelar</span>
                    </Button>
                </div>
        </div>
    )
}

export default ModalBtns