import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Logout } from '../../Controllers/Actions/session'

function NavBar() {
    const state = useSelector(state => state.sessionReducer)
    const dispatch = useDispatch()

    const logOut=()=>{
        dispatch(Logout())
    }



    return state.userState?
    (
        <div className='flex bg-green-200  items-center justify-around fixed w-screen' >
            <div className='flex w-32 justify-around font-bold'>
                <span className='text-blue-500'>Rick</span>
                <p className='text-black'>and</p> 
                <span className='text-yellow-500'>Morty</span>
            </div>
            <div>
                <button className='bg-gray-300 font-bold p-2 m-2 rounded-xl'
                        onClick={logOut}
                    >Salir</button>
            </div>
        </div>
    )
    :
    (
        <Redirect to='/'/>
    )
}

export default NavBar
