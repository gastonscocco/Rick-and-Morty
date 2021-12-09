import React from 'react'
import CharacterListContainer from '../../Components/CharacterList/CharacterListContainer'

function Home() {

    return (
        <div className='min-h-screen pt-16 px-12 flex flex-col items-center justify-center bg-orange-100'>
            <div>This is the home</div>
            <div className='flex w-screen items-center justify-around'>
                <CharacterListContainer/>
            </div>
        </div>
    )
}

export default Home
