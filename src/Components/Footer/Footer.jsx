import React from 'react'
import { useLocation } from 'react-router-dom'
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";



function Footer() {
    const URL = useLocation().pathname


    return URL==='/home' || URL ==='/favorite' ? 
    (
        <div className='flex items-center justify-center h-20 bg-gray-200'>
            <div className='flex items-center justify-center mr-4'>
                <span className='text-xl font-semibold text-yellow-600 mr-2'>Dev by</span>
                <span className='text-xl font-semibold text-blue-500 flex flex-wrap'>GS</span>
            </div>
            <div className='flex flex-col items-center justify-center ml-4'>
                        <span className='font-bold'>Contact me!</span>
                        <div className='flex w-28 items-center justify-around'>
                            <a  href='https://www.linkedin.com/in/gaston-scocco/' 
                                rel='noreferrer' 
                                target="_blank"><AiFillLinkedin className='text-3xl text-blue-500'/>
                            </a>
                            <a  href='https://github.com/gastonscocco' 
                                rel='noreferrer' 
                                target="_blank"><AiFillGithub className='text-3xl'/>
                            </a>
                            <a  href='mailto:gaston_scocco@hotmail.com' 
                                rel='noreferrer' 
                                target="_blank"><AiFillMail className='text-3xl text-gray-400'/>
                            </a>
                        </div>
                    </div>
        </div>
    )
    :
    (
        <div className='flex items-center justify-around h-screen bg-gray-200 w-screen pt-4'>
            <div className='flex flex-col items-center justify-center h-full w-screen	'>
                <div className='mb-10 bg-gray-300 flex items-center justify-center rounded-full shadow-xl'>
                    <img src='https://media.discordapp.net/attachments/902284628621148220/918677173592784996/Prof.png' 
                        alt='dev'/>
                </div>
                <div className='bg-gray-300 w-96 h-64 flex flex-col items-center justify-around rounded-xl shadow-xl'>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-2xl font-bold text-yellow-600'>Scocco Gaston</span>
                        <span className='text-xl font-semibold text-blue-500'>FullStack Development</span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='font-bold'>Contact me!</span>
                        <div className='flex w-28 items-center justify-around'>
                            <a  href='https://www.linkedin.com/in/gaston-scocco/' 
                                rel='noreferrer' 
                                target="_blank"><AiFillLinkedin className='text-3xl text-blue-500'/>
                            </a>
                            <a  href='https://github.com/gastonscocco' 
                                rel='noreferrer' 
                                target="_blank"><AiFillGithub className='text-3xl'/>
                            </a>
                            <a  href='mailto:gaston_scocco@hotmail.com' 
                                rel='noreferrer' 
                                target="_blank"><AiFillMail className='text-3xl text-gray-400'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
