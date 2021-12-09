import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CharacterListContainer from '../../Components/CharacterList/CharacterListContainer'
import Pagination from '../../Components/Pagination/Pagination'

function Home() {
    const characters = useSelector(state => state.sessionReducer.characters.originalList)
    const filtered = useSelector(state => state.sessionReducer.characters.filteredList)
    const page = useSelector(state => state.generalReducer.page)
console.log(filtered)
    const pages = Math.ceil(filtered.length?filtered.length/10:characters.length/10)

    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, filtered])

    
    return (
        <div className='min-h-screen pt-32 px-12 flex flex-col items-center justify-center bg-yellow-100'>
            <div>This is the home</div>
            <div className='flex w-screen items-center justify-around'>
                <CharacterListContainer/>
            </div>
            <div>
                <Pagination page={page} pages={pages}/>
            </div>
        </div>
    )
}

export default Home
