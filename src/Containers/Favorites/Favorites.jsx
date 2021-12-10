import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CharacterListContainer from '../../Components/CharacterList/CharacterListContainer'

function Favorites() {
    const favList = useSelector(state => state.sessionReducer.characters.favList)

    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return favList?.length===0?
    (
        <div className='min-h-screen pt-32 px-12 flex flex-col items-center justify-center bg-yellow-100'>
            <div className='flex w-full items-center justify-center'>
                <p className='text-4xl items-center justify-center text-gray-500'
                    >   You still do <br/><span className='mx-2 text-red-500 font-bold'>not have favorite</span><br/> 
                        characters, to select them go 
                        <span className='mx-2 text-orange-700 font-bold'>explore</span>, 
                        look for the one you like, and in its details you can make it 
                        <span className='mx-2 text-green-500 font-bold'>your favorite</span></p>
            </div>
        </div>
    )
    :
    (
        <div className='min-h-screen pt-32 px-12 flex flex-col items-center justify-center bg-yellow-100'>
            <div className='flex w-screen items-center justify-around'>
                <CharacterListContainer favorites={true}/>
            </div>
        </div>
    )
}

export default Favorites
