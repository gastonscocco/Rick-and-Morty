import React from 'react'
import ModalBtns from '../ModalContainer/ModalBtns'
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import { useDispatch } from 'react-redux';
import { addCharacter, removeCharacter } from '../../Controllers/Actions/favorites';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2'

function CharacterCard(props) {
    const dispatch = useDispatch()
    const URL = useLocation().pathname
    
    const favList = useSelector(state => state.sessionReducer.characters.favList)

    const repeatCharacter=()=>{
        Swal.fire({
            position: 'top',
            icon: 'warning',
            title: 'repeated character',
            showConfirmButton: false,
            timer: 1000
        })
    }

    const limitCharacter=()=>{
        Swal.fire({
            title: 'You have the maximum number of favorites allowed, you will have to remove one',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    const removedAlert=()=>{
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'removed character',
            showConfirmButton: false,
            timer: 800
        })
    }

    const favorite=()=>{
        favList.length===5 && limitCharacter()
        favList?.find(item=>item.id===props.character.id) && repeatCharacter();
        (favList?.length<5 && !favList?.find(item=>item.id===props.character.id)) && dispatch(addCharacter(props.character))
        props.onCancel()
    }

    const remove=()=>{
        dispatch(removeCharacter(props.character))
        removedAlert()
        props.onCancel()
    }


    return (
        <div className='flex w-96 items-center justify-center'>
            <Card>
                <div className='w-72 flex items-center-justify-center'>
                    <CardImage
                        src={props.character.image}
                        alt="Card Image"
                    />
                </div>

                <CardBody>
                    <div className="flex items-center justify-center h-16 w-44">
                        <H6 color="gray" ><span className="font-mono">{props.character.name}</span></H6>
                    </div>
                    <div>
                        <span className="flex flex-wrap font-bold"
                            >Species : <p className="ml-2 font-semibold"
                                >{props.character.species}</p></span>
                        <span className="flex flex-wrap font-bold"
                            >Gender : <p className="ml-2 font-semibold"
                                >{props.character.gender}</p></span>
                        <span className="flex flex-wrap font-bold"
                            >Origin : <p className="ml-2 font-semibold"
                                >{props.character.origin}</p></span>
                        <span className="flex flex-wrap font-bold"
                            >Episodes : <p className="ml-2 font-semibold"
                                >{props.character.episodes}</p></span>
                        <span className="flex flex-wrap font-bold"
                            >Status : <p className="ml-2 font-semibold"
                                >{props.character.status==='unknown'?' ? ':props.character.status}</p></span>
                    </div>
                </CardBody>

                <CardFooter>
                    <div className='mt-4 flex items-center justify-center'>
                        <ModalBtns  onSuccess={URL==='/favorite'?remove:favorite}
                                    textBtn={URL==='/favorite'?'Remove':'Favorite'}
                                    onCancel={props.onCancel}
                                />
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}

export default CharacterCard
