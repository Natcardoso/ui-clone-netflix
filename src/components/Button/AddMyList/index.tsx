import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Tooltip } from "../../Tooltip";
import { DivIcon } from "../styles";

type Props = {
    sizeIcon?: string;
};

const AddMyList = ({ sizeIcon }: Props) => {
    const [buttonAdd, setButtonAdd] = useState(false);

    return (
        <Tooltip
            text={
                buttonAdd ? "Remover da Minha lista" : "Adicionar à Minha lista"
            }
        >
            <DivIcon
                style={{ width: sizeIcon, height: sizeIcon }}
                onClick={() => setButtonAdd(!buttonAdd)}
            >
                {buttonAdd ? (
                    <FontAwesomeIcon icon={faCheck} />
                ) : (
                    <FontAwesomeIcon icon={faPlus} />
                )}
            </DivIcon>
        </Tooltip>
    );
};

export default AddMyList;
