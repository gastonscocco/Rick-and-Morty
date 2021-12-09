import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { selectPag } from '../../Controllers/Actions/pagination';
import { FcPrevious , FcNext } from "react-icons/fc";



function Pagination({page, pages}) {
    page=Number(page);

    const dispatch = useDispatch();
    const numOfPages = new Array(pages).fill(0) //array con 0, para tener un legth 

    // functions for change pages
    const clickNext=()=>{
        dispatch(selectPag(++page));
    }

    const clickPrev=()=>{
        dispatch(selectPag(--page));
    }
    // with keys
    const keyNext=event=>{
        event.keyCode===39 && dispatch(selectPag(++page));
    }

    const keyPrev=event=>{
        event.keyCode===37 && dispatch(selectPag(--page))
    }
    // with select
    const changePag=event=>{
        const value=event.target.value;
        dispatch(selectPag(value));
    }
    useEffect(() => {
        dispatch(selectPag(1))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='flex items-center justify-around bg-gray-200 py-2 w-screen'>
            <button className={page===1?'font-transparent':'font-bold text-2xl text-blue-400'} 
                    disabled={page===1} 
                    onClick={clickPrev} 
                    onKeyDown={keyPrev}
                ><FcPrevious/></button>
            <div>
                <span className='font-semibold'>Page </span>
                    <select value={page}
                            className='bg-transparent'
                            onChange={changePag} 
                            //ref={input => input && input.focus()}
                            >
                        {numOfPages.map((elem, index)=>{
                            return <option key={`pag-${index}`}>{index+1}</option>
                        })}
                    </select>
                <span className='font-semibold'> of {pages}</span>
            </div>
            <button className={page===pages?'font-transparent':'font-bold text-2xl text-blue-400'} disabled={page===pages} onClick={clickNext} onKeyDown={keyNext}><FcNext/></button>
        </div>
    )
}

export default Pagination