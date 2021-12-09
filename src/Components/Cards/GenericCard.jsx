import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

export default function GenericCard({props}) {
    return (
        <Card className='container'>
            <CardImage
                src={props.image}
                alt="Card Image"
                className='w-76 h-76 rounded-full'
            />

            <CardBody>
                <H6 color="gray">{props.name}</H6>
                <Paragraph color="gray">
                    <span className="flex font-bold">Species : <p className="ml-2 font-semibold">{props.species}</p></span>
                    <span className="flex font-bold">Episodes : <p className="ml-2 font-semibold">{props.episodes}</p></span>
                    <span className="flex font-bold">Actual State : <p className="ml-2 font-semibold">{props.status}</p></span>
                </Paragraph>
            </CardBody>

            <CardFooter>
                <Button color="lightBlue" size="lg" ripple="light">
                    Read More
                </Button>
            </CardFooter>
        </Card>
    );
}