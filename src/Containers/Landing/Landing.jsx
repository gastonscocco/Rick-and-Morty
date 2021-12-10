import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getAllCharacters, Joined } from '../../Controllers/Actions/session'
import LandingVideo from '../../Media/Landing.mp4'
import '../../Assets/Custom.css'

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
        <div className='bg-yellow-200 flex flex-col items-center justify-center w-screen' >
            <div className='flex items-center justify-center z-10 w-full h-screen'>
            <video
                autoPlay
                loop
                muted
                className="absolute z-10 w-auto min-w-full min-h-full max-w-none sm:h-full md:h-full"
            >
                <source
                src={LandingVideo}
                type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            </div>
            <div className='rounded-2xl z-20 joinedText'>
                <p className='text-4xl font-extrabold text-gray-200 opacity-60'>Welcome to the <br/>
                        <span className='mx-2 text-blue-400 opacity-80'>Rick</span>& 
                        <span className='mx-2 text-yellow-400 opacity-80'>Morty</span> 
                    wiki</p>
                <button className='opacity-80 hover:opacity-100 font-bold mx-2 rounded-xl text-3xl text-white'
                        onClick={getAll}
                    >Explore</button>
            </div>
        </div>
    )
}

export default Landing
