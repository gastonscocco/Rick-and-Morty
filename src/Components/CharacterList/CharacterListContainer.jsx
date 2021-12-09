import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import GenericCard from '../Cards/GenericCard'

function CharacterListContainer() {
    const originalCharacters = useSelector(state => state.sessionReducer.characters)
    const pageNum = useSelector(state => state.generalReducer.page)


    const showPage = (originalCharacters, pageNum, isFilter)=>{
        const init=(pageNum-1)*10;
        const end =pageNum*10;
        return originalCharacters.slice(init, end)
    }

    return (
        <div 
        className='w-screen flex flex-wrap items-center justify-center'
        >
            {showPage(originalCharacters.originalList, pageNum).map((item, index)=>{
                    return (
                        <div key={index} className='w-56 m-6'>
                            <GenericCard key={index} props={item}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CharacterListContainer
