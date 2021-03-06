import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CharacterListContainer from '../../Components/CharacterList/CharacterListContainer'
import Pagination from '../../Components/Pagination/Pagination'

function Home() {
    const characters = useSelector(state => state.sessionReducer.characters.originalList)
    const filtered = useSelector(state => state.sessionReducer.characters.filteredList)
    const page = useSelector(state => state.generalReducer.page)

    const pages = Math.ceil(filtered.length?filtered.length/10:characters.length/10)

    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, filtered, URL])

    const goUp=()=>{
        window.scrollTo(0, 0)
    }
    
    return (
        <div className='min-h-screen w-full pt-32 px-12 flex flex-col items-center justify-center bg-yellow-100'>
            <div className='flex flex-col items-center justify-center text-3xl font-mono text-gray-400 border-b-2 border-gray-400 pb-4'>
                <p>Welcome to </p>
                <p className='text-gray-700 text-xl'>
                    <span className='mr-2 font-bold text-blue-400 text-4xl'>Rick</span>& 
                    <span className='ml-2 font-bold text-yellow-400 text-4xl'>Morty</span>
                </p> 
                <p>Wiki!</p>
            </div>
            <div>
                <Pagination page={page} pages={pages}/>
            </div>
            {characters.length?
                <div className='flex w-screen items-center justify-around'>
                    <CharacterListContainer/>
                </div>
            :
                <div>
                    <img src='https://cdn.discordapp.com/attachments/902284628621148220/918726423861133412/Spinner-1s-217px_1.gif' alt='loading'/>
                </div>
            }
            <div className=' mb-8'>
                <span   onClick={goUp}
                        className='text-xl font-bold text-gray-500 hover:text-blue-400 rounded-3xl cursor-pointer'
                    >Go up!</span>
            </div>
        </div>
    )
}

export default Home
