
import React, { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavItem from "@material-tailwind/react/NavItem";
import Icon from "@material-tailwind/react/Icon";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom'
import { Logout } from '../../Controllers/Actions/session'
import Swal from 'sweetalert2'
import Modal from "../ModalContainer/Modal";
import Search from "../Search/Search";
import { restoreSearch, searchCharacter } from "../../Controllers/Actions/search";
import Button from "@material-tailwind/react/Button";

export default function NavBar() {
    const [openMenu, setOpenMenu] = useState(false);
    const [modal, setModal] = useState(false)
    const state = useSelector(state => state.sessionReducer)
    const history = useHistory()
    const dispatch = useDispatch()

    const URL = useLocation().pathname
    
    useEffect(() => {
        state.userState && setOpenMenu(false)
        modal && setOpenMenu(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.userState, modal, URL])


    const Out=()=>{
        setOpenMenu(false)
        Swal.fire({
            title: 'Do you want to leave ?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#a0dcdc',
            cancelButtonColor: '#e4e28b',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed){logOut()}
            if(!result.isConfirmed){
                Swal.fire({
                    position: 'top-end',
                    title: 'Great!',
                    showConfirmButton: false,
                    timer: 800
                })
            }
        })
    }

    const logOut=()=>{
        dispatch(Logout())
    }

    const showModal=()=>{
        setModal(!modal)
    }

    const search=(target)=>{
        setModal(!modal)
        target!=='clean' && dispatch(searchCharacter(target))
        target==='clean' && dispatch(restoreSearch())
    }

    const favorite=()=>{
        URL==='/home' && history.push('/favorite')
    }
    const goHome=()=>{
        URL==='/favorite' &&history.push('/home')
    }
    console.log(window.screen)
    return state.userState?
    (
        <div className="fixed w-full bg-gray-500 h-15 z-50">
            <Modal  trigger={modal}
                    children={<Search   onConfirm={search}
                                        onCancel={showModal}
                                />}
                />

            <Navbar color="gray">
                <NavbarContainer>
                    <NavbarWrapper>
                        <NavbarBrand>
                        <div    className='flex w-32 justify-around items-center font-bold cursor-pointer' 
                                onClick={goHome}
                            >
                            <span className='text-blue-200 text-xl' >Rick</span>
                            <p className='text-white font-normal mx-2'>{'&'}</p> 
                            <span className='text-yellow-200 text-xl'>Morty</span>
                        </div>
                        </NavbarBrand>
                        <NavbarToggler
                            color="white"
                            onClick={() => setOpenMenu(!openMenu)}
                            ripple="light"
                        />
                    </NavbarWrapper>
                    
                    {window.screen.width>1000 ? 
                        <Nav>
                                <Link to='/home'>
                                    <div className='cursor-pointer mx-2' >
                                        <span className='cursor-pointer text-2xl font-semibold text-white'>Explore</span>
                                    </div>
                                </Link>
                            {URL==='/home' && <div className='cursor-pointer mx-2' 
                                                        onClick={showModal}>
                                                    <span className='cursor-pointer text-2xl font-semibold text-white'>Search</span>
                                                </div>}
                                <div className='cursor-pointer mx-2' onClick={favorite}>
                                    <span className='cursor-pointer text-2xl font-semibold text-white'>Favorite</span>
                                </div>
                                <div className='cursor-pointer mx-2' onClick={Out}>
                                <span className='cursor-pointer text-2xl font-semibold text-white'>Out</span>
                                </div>
                        </Nav>
                    :
                    <NavbarCollapse open={openMenu}>
                        <Nav>
                            <NavItem href="" ripple="light">
                                <div className='cursor-pointer' onClick={goHome}>
                                    <Icon name="Explore" size="xl" className='cursor-pointer'/>
                                </div>
                            </NavItem>
                            {URL==='/home' && <NavItem href="" ripple="light" onClick={showModal}>
                                                <div className='cursor-pointer'>
                                                    <Icon name="Search" size="xl" className='cursor-pointer'/>
                                                </div>
                                            </NavItem>}
                            <NavItem href="/favorites" ripple="light">
                                <div className='cursor-pointer' onClick={favorite}>
                                    <Icon name="Favorites" size="xl"/>
                                </div>
                            </NavItem>
                            <NavItem href="" ripple="light" onClick={Out}>
                                <div className='cursor-pointer'>
                                    <Icon name="Out" size="xl" className='cursor-pointer' onClick={Out}/>
                                </div>
                            </NavItem>
                        </Nav>
                    </NavbarCollapse>}
                </NavbarContainer>
            </Navbar>
        </div>
    )
    :
    (
        <Redirect to='/'/>
    )
}




// import React from 'react'
// import { useDispatch } from 'react-redux'
// import { useSelector } from 'react-redux'
// import { Redirect } from 'react-router-dom'
// import { Logout } from '../../Controllers/Actions/session'
// import Pagination from '../Pagination/Pagination'

// function NavBar() {
    // const state = useSelector(state => state.sessionReducer)
    // const originalCharacters = useSelector(state => state.sessionReducer.characters)
    // const page = useSelector(state => state.generalReducer.page)
    // const pages = Math.ceil(originalCharacters.originalList.length/10)
    
    // const dispatch = useDispatch()


    // const logOut=()=>{
    //     dispatch(Logout())
    // }



//     return state.userState?
//     (
//         <div className='flex bg-green-200  items-center justify-around fixed w-screen' >
            // <div className='flex w-32 justify-around font-bold'>
            //     <span className='text-blue-500'>Rick</span>
            //     <p className='text-black'>and</p> 
            //     <span className='text-yellow-500'>Morty</span>
            // </div>
            // <div>
            //     <Pagination page={page} pages={pages}/>
            // </div>
//             <div>
//                 <button className='bg-gray-300 font-bold p-2 m-2 rounded-xl'
//                         onClick={logOut}
//                     >Salir</button>
//             </div>
//         </div>
//     )
    // :
    // (
    //     <Redirect to='/'/>
    // )
// }
