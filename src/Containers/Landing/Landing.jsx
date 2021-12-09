import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getAllCharacters, Joined } from '../../Controllers/Actions/session'

function Landing() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.sessionReducer)

    const getAll=()=>{
        dispatch(getAllCharacters())
        dispatch(Joined())
    }

    return state.userState?
    <Redirect to='/home'/>
    :
    (
        <div className='bg-yellow-200 min-w-screen min-h-screen flex items-center justify-center'>
            <h2>Landing Page</h2>
            <button className='bg-gray-300 font-bold p-2 m-2 rounded-xl'
                    onClick={getAll}
                >Comenzar</button>
        </div>
    )
}

export default Landing
