import React, { useState } from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Button from "@material-tailwind/react/Button";
import Modal from "../ModalContainer/Modal";
import CharacterCard from "./CharacterCard";

export default function GenericCard({props}) {
    const [modal, setModal] = useState(false)
    const [selectCharacter, setSelectCharacter] = useState('')

    const showCharacter = (props)=>{
        setModal(!modal)
        setSelectCharacter(props)
    }
    const showModal=()=>{
        setModal(!modal)
    }



    return (
        <Card className='container shadow-1xl bg-white flex flex-col items-center h-fit'>
            <CardImage
                src={props.image}
                alt="Card Image"
                className='w-76 h-76 rounded-full'
            />

            <Modal  trigger={modal}
                    children={<CharacterCard    //onConfirm={}
                                                character={selectCharacter}
                                                onCancel={showModal}
                                                ForwardRef='/home'
                                    />}
                />

            <CardBody>
                <div className="flex items-center justify-center h-16 w-44">
                    <H6 color="gray" ><span className="font-mono">{props.name}</span></H6>
                </div>
                <div>
                    <span className="flex font-bold">Species : <p className="ml-2 font-semibold">{props.species}</p></span>
                    <span className="flex font-bold">Episodes : <p className="ml-2 font-semibold">{props.episodes}</p></span>
                    <span className="flex font-bold">Status : <p className="ml-2 font-semibold">{props.status==='unknown'?' ? ':props.status}</p></span>
                </div>
            </CardBody>

            <CardFooter>
            <Button
                    color="amber"
                    buttonType="link"
                    size="sm"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="dark"
                    onClick={()=>showCharacter(props)}
                >Details</Button>
            </CardFooter>
        </Card>
    );
}