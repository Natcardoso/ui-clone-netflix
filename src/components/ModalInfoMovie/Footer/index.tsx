import React, { useEffect, useState } from "react";
import { Tcast, Tcrew } from "..";
import { DataResults } from "../../../types";
import * as s from "./styles";

type Props = {
    currentMovie: DataResults;
    dataCast: Tcast[];
    dataCrew: Tcrew[];
};

const Footer = ({ currentMovie, dataCast, dataCrew }: Props) => {
    const [director, setDirector] = useState<Tcrew[]>([]);

    useEffect(() => {
        if (dataCrew.length > 0) {
            const getDirector = dataCrew.filter(
                ({ job }: any) => job === "Director"
            );

            setDirector(getDirector);
        } else {
            return;
        }
    }, [director]);

    return (
        <s.Container>
            <s.DivTitle>
                <span>Sobre</span>
                <span className="title">
                    {currentMovie.name ? currentMovie.name : currentMovie.title}
                </span>
            </s.DivTitle>
            <s.ContainerInfoDescription>
                <div>
                    <span>Direção:</span>
                    {currentMovie.name ? (
                        <p>{currentMovie.created_by[0].name}</p>
                    ) : (
                        <p>{director[0] && director[0].original_name}</p>
                    )}
                </div>
                <div>
                    <span>Elenco:</span>
                    {dataCast.map((cast) => (
                        <>
                            <p key={cast.id}>{cast.name}</p>
                            <p className="virgula">,</p>
                        </>
                    ))}
                </div>
                <div>
                    <span>Gêneros:</span>
                    {currentMovie.genres.map(
                        (genre: { id: number; name: string }) => (
                            <>
                                <p key={genre.id}>{genre.name}</p>
                                <p className="virgula">,</p>
                            </>
                        )
                    )}
                </div>
            </s.ContainerInfoDescription>
        </s.Container>
    );
};

export default Footer;
