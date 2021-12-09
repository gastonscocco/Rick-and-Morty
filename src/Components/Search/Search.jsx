import React, { useState } from 'react'
import ModalBtns from '../ModalContainer/ModalBtns'
import SearchFilters from './SearchFilters'
import SearchInput from './SearchInput'
import Button from "@material-tailwind/react/Button";

function Search(props) {
    const [nameSearch, setNameSearch] = useState('')
    const orderOptions = [{color:'orange',option:'Name'},{color:'blue',option:'Episodes'},{color:'red',option:'Status'}, {color:'green',option:'Species'}, {color:'gray', option: 'None'}]
    const [activeFilter, setActiveFilter] = useState({color:'gray', option: 'None'})
    
    const formatTarget=()=>{
        props.onConfirm({name: nameSearch, orderBy: activeFilter.option})
    }
    const cleanSearch=()=>{
        props.onConfirm('clean')
    }


    return (
        <div className='flex flex-col items-center justify-around'>
            <div className='pt-6 mb-2'>
                <SearchInput name={nameSearch} setName={setNameSearch}/>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <div className='border-b-2 mb-2 flex flex-col items-center justify-center'>
                    <h6 className='mb-2'>Order By</h6>
                    <Button
                        color={activeFilter && activeFilter.color}
                        buttonType="link"
                        size="sm"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="dark"
                    >
                        {activeFilter && activeFilter.option}
                    </Button>
                </div>
                <div className='flex'>
                    <div className=''>
                        <SearchFilters list={orderOptions} setFilter={setActiveFilter}/>
                    </div>
                </div>
                <div>
                    <Button
                        color='gray'
                        buttonType="link"
                        size="sm"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="dark"
                        onClick={cleanSearch}
                    >
                        Clean Search
                    </Button>
                </div>
            </div>
            <div className='mt-4'>
                <ModalBtns  onSuccess={formatTarget}
                            onCancel={props.onCancel}/>
            </div>
        </div>
    )
}

export default Search
