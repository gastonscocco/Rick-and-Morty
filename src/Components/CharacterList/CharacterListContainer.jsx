import React from 'react'
import { useSelector } from 'react-redux'
import GenericCard from '../Cards/GenericCard'

function CharacterListContainer(props) {
    const characters = useSelector(state => state.sessionReducer.characters)
    const pageNum = useSelector(state => state.generalReducer.page)


    const showPage = (characters, pageNum, isFilter)=>{
        const init=(pageNum-1)*10;
        const end =pageNum*10;
        return characters.slice(init, end)
    }

    return props.favorites?
    (
        <div 
            className='w-screen flex flex-wrap items-center justify-center'
            >
            {showPage(characters.favList, pageNum).map((item, index)=>{
                    return (
                        <div key={index} className='w-56 m-6'>
                            <GenericCard key={index} props={item}/>
                        </div>
                    )
                })
            }
        </div>
    )
    :
    characters.filteredList.length?
    (
        <div 
            className='w-screen flex flex-wrap items-center justify-center'
            >
            {showPage(characters.filteredList, pageNum).map((item, index)=>{
                    return (
                        <div key={index} className='w-56 m-6'>
                            <GenericCard key={index} props={item}/>
                        </div>
                    )
                })
            }
        </div>
    )
    :
    (
        <div 
            className='w-screen flex flex-wrap items-center justify-center'
            >
            {showPage(characters.originalList, pageNum).map((item, index)=>{
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
