import React from "react";
import Label from "@material-tailwind/react/Label";

export default function SearchLabel(props) {
    return (
        <div className="m-1">
            <Label color={props.color}>{props.name}</Label>
        </div>
    );
}