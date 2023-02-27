import React from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import { ReactComponent as LogoLetter } from "../../img/logo-letter.svg";

import * as s from "./styles";

type Props = {
    featuredData: { name: string; overview: string };
};

export const Featured = ({ featuredData }: Props) => {
    return (
        <s.Container>
            <s.ShadowTop>
                <s.DivLogo>
                    <LogoLetter />
                    <span>Série</span>
                </s.DivLogo>
                <s.ContainerInfo>
                    <h1>{featuredData?.name}</h1>
                    <s.Sinopse>{featuredData?.overview}</s.Sinopse>

                    <s.Play>
                        <button>
                            <FaPlay size={30} />
                            <span>Assistir</span>
                        </button>
                        <button>
                            <AiOutlineInfoCircle size={38} />
                            <span>Mais informações</span>
                        </button>
                    </s.Play>
                </s.ContainerInfo>
            </s.ShadowTop>
        </s.Container>
    );
};
