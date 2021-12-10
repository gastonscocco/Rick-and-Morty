import React from 'react'
import SearchLabel from './SearchLabel'


function SearchFilters(props) {

    const SelectOption=(color, option)=>{
        props.setFilter({color ,option})
    }
    

    return (
        <div className='flex items-center justify-center'>
            <div className='flex flex-wrap items-center justify-center'>
                {props?.list?.map((item,index)=>{
                    return <div onClick={()=>SelectOption(item.color, item.option)}
                                className='cursor-pointer'
                                key={index}
                            >
                            <SearchLabel    key={index} 
                                            color={item.color} 
                                            name={item.option} 
                                        />
                            </div>
                })}
            </div>
        </div>
    )
}

export default SearchFilters
