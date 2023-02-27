import React, { useContext, useEffect, useState } from "react";

import api from "../../api";
import { Tooltip } from "../Tooltip";
import { CurrentMovieContext } from "../../context/movieCurrent";
import { DataResults } from "../../types";
import { LikeDeslike } from "../Button/LikeDeslike";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as PlayArrow } from "../../img/play-arrow.svg";
import { ReactComponent as BallSeparation } from "../../img/ball-separation.svg";
import { ReactComponent as IconHd } from "../../img/badge-hd.svg";

import * as s from "./styles";
import { DivIcon } from "../Button/styles";
import AddMyList from "../Button/AddMyList";

type Props = {
    movieData: DataResults;
};

export const Card = ({ movieData }: Props) => {
    const { setOpenModalInfo, setCurrentMovie } =
        useContext(CurrentMovieContext);
    const URL_IMAGE = "https://image.tmdb.org/t/p/w300";
    const [hoverLike, setHoverLike] = useState(false);
    const [data, setData] = useState<any>({});

    useEffect(() => {
        const gettingDataMovieInfo = async () => {
            let list;

            list = await api.getMovieInfo(
                movieData.id,
                movieData.name ? "tv" : "movie"
            );

            setData(list);
        };

        gettingDataMovieInfo();
    }, []);

    const handleClickMovie = () => {
        setOpenModalInfo(true);
        setCurrentMovie(data);
    };

    const formatVoteAverage = `${data.vote_average}`
        .replace(".", "")
        .substring(2, 0);

    const minutes = data.runtime;
    let hrs: number | string = Math.floor(minutes / 60);
    let min: number | string = minutes % 60;
    hrs = hrs > 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    const totalMovieHours = `${hrs}h ${min}min`;

    return (
        <s.Container>
            <img src={`${URL_IMAGE}${data.backdrop_path}`} />
            <s.ContainerMovieMouse className="ContainerDescription">
                <img src={`${URL_IMAGE}${data.backdrop_path}`} />

                <s.DivAllInfo>
                    <s.Title>
                        <span>{data.title ? data.title : data.name}</span>
                    </s.Title>
                    <s.ContainerIcons>
                        <s.IconsMovie>
                            <DivIcon
                                style={{
                                    backgroundColor: "var(--white)",
                                    border: "none",
                                }}
                            >
                                <PlayArrow style={{ color: "var(--black)" }} />
                            </DivIcon>
                            <AddMyList />
                            <DivIcon
                                onMouseOver={() => setHoverLike(true)}
                                onMouseOut={() => setHoverLike(false)}
                            >
                                <LikeDeslike hoverLike={hoverLike} />
                            </DivIcon>
                        </s.IconsMovie>
                        <Tooltip text="Episódios e informações">
                            <DivIcon onClick={handleClickMovie}>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </DivIcon>
                        </Tooltip>
                    </s.ContainerIcons>
                    <s.Info>
                        <span>{formatVoteAverage}% relevante</span>
                        {data.runtime ? (
                            <span>{totalMovieHours}</span>
                        ) : (
                            <span>
                                {data.number_of_seasons}{" "}
                                {data.number_of_seasons > 0
                                    ? "temporadas"
                                    : "temporada"}
                            </span>
                        )}

                        <IconHd fontSize={35} />
                    </s.Info>
                    <s.Categories>
                        {data.genres
                            ?.slice(0, 3)
                            .map((e: { id: number; name: string }) => (
                                <>
                                    <span key={e.id}>{e.name}</span>
                                    <BallSeparation />
                                </>
                            ))}
                    </s.Categories>
                </s.DivAllInfo>
            </s.ContainerMovieMouse>
        </s.Container>
    );
};
