import React from 'react'
import Input from "@material-tailwind/react/Input";


function SearchInput(props) {

    const handleInput=(e)=>{
        props.setName(e.target.value)
    }

    return (
        <div className='flex items-center justify-center w-44'>
            <Input
                type="name"
                color="yellow"
                size="sm"
                outline={false}
                placeholder="Search by Name"
                onChange={handleInput}
            />
        </div>
    )
}

export default SearchInput
