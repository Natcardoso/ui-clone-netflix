import React, { useContext, useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";

import { CurrentMovieContext } from "../../context/movieCurrent";
import { Element } from "../../types";
import { LikeDeslike } from "../Button/LikeDeslike";

import { FaPlay } from "react-icons/fa";
import { ReactComponent as Close } from "../../img/close.svg";
import { ReactComponent as NoSound } from "../../img/noSound.svg";
import { ReactComponent as WithSound } from "../../img/withSound.svg";
import { ReactComponent as IconHd } from "../../img/badge-hd.svg";

import * as s from "./styles";
import api from "../../api";
import ListOfEpisodes from "./ListOfEpisodes";
import Footer from "./Footer";
import SimilarTitles from "./SimilarTitles";
import AddMyList from "../Button/AddMyList";

export type Tcast = {
    name: string;
    id: number;
};

export type Tcrew = {
    original_name: string;
};

const ModalInfoMovie = () => {
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";
    const { setOpenModalInfo, currentMovie } = useContext(CurrentMovieContext);
    const [trailer, setTrailer] = useState(false);
    const [muted, setMuted] = useState(false);
    const [videoEnd, setVideoEnd] = useState(false);
    const [hoverLike, setHoverLike] = useState(false);
    const [dataCast, setDataCast] = useState<Tcast[]>([]);
    const [dataCrew, setDataCrew] = useState<Tcrew[]>([]);

    useEffect(() => {
        if (!currentMovie) return;

        if (currentMovie.videos.results.length > 0) {
            const index = currentMovie.videos.results.findIndex(
                (element: Element) => element.type === "Trailer"
            );

            setTrailer(currentMovie.videos.results[index].key);
        } else {
            console.log("Não existe trailer para esse filme");
        }

        const getTvCast = async () => {
            const result: any = await api.getCast(
                currentMovie.id,
                currentMovie.name ? "tv" : "movie"
            );

            setDataCast(result.cast);
            setDataCrew(result.crew);
        };
        getTvCast();
    }, [currentMovie]);

    const handleOnEnded = () => {
        setVideoEnd(true);
    };

    const formatVoteAverage = `${currentMovie?.vote_average}`
        .replace(".", "")
        .substring(2, 0);

    const minutes = currentMovie.runtime;
    let hrs: number | string = Math.floor(minutes / 60);
    let min: number | string = minutes % 60;
    hrs = hrs > 10 ? "0" + hrs : hrs;
    min = min < 10 ? "0" + min : min;
    const totalMovieHours = `${hrs}h ${min}min`;

    return (
        <s.Container>
            <s.Modal>
                <s.DivMovie>
                    <s.DivIconClose onClick={() => setOpenModalInfo(false)}>
                        <Close />
                    </s.DivIconClose>
                    <s.ContainerPlayer
                        style={{
                            backgroundImage: `url(${URL_IMAGE}${currentMovie.backdrop_path})`,
                        }}
                    >
                        <ReactPlayer
                            className="react-player"
                            url={`https://www.youtube.com/watch?v=${trailer}`}
                            width="100%"
                            height="100%"
                            playing
                            muted={!muted}
                            onEnded={handleOnEnded}
                            style={{ display: videoEnd ? "none" : "block" }}
                        />
                    </s.ContainerPlayer>
                    <s.ContainerNameButtonMovie>
                        <s.DivName>
                            <span>
                                {currentMovie.name
                                    ? currentMovie.name
                                    : currentMovie.title}
                            </span>
                        </s.DivName>
                        <s.ButtonsInterage>
                            <div>
                                <button type="button">
                                    <FaPlay size={30} />
                                    <span>Assistir</span>
                                </button>
                                <AddMyList sizeIcon={"42px"} />
                                <s.DivIcon
                                    onMouseOver={() => setHoverLike(true)}
                                    onMouseOut={() => setHoverLike(false)}
                                >
                                    <LikeDeslike hoverLike={hoverLike} />
                                </s.DivIcon>
                            </div>
                            <div>
                                <s.DivIcon
                                    className="iconNoSound"
                                    onClick={() => setMuted(!muted)}
                                >
                                    {!muted ? <NoSound /> : <WithSound />}
                                </s.DivIcon>
                            </div>
                        </s.ButtonsInterage>
                    </s.ContainerNameButtonMovie>
                    <s.ShadowBottom></s.ShadowBottom>
                </s.DivMovie>
                <s.ContainerMovieInfo>
                    <s.ContainerDescription>
                        <s.ContainerInfoSinopse>
                            <s.Info>
                                <span>
                                    {formatVoteAverage}
                                    {formatVoteAverage.length === 1 && "0"}%
                                    relevante
                                </span>
                                <span>
                                    {currentMovie.title
                                        ? currentMovie.release_date.substring(
                                              4,
                                              0
                                          )
                                        : currentMovie.first_air_date.substring(
                                              4,
                                              0
                                          )}
                                </span>
                                {currentMovie.runtime ? (
                                    <span>{totalMovieHours}</span>
                                ) : (
                                    <span>
                                        {currentMovie.number_of_seasons}
                                        {currentMovie.number_of_seasons === 1
                                            ? " temporada"
                                            : " temporadas"}
                                    </span>
                                )}
                                <IconHd />
                            </s.Info>
                            <s.Sinopse>
                                <span>{currentMovie.overview}</span>
                            </s.Sinopse>
                        </s.ContainerInfoSinopse>
                        <s.ContainerGenresElenco>
                            <s.DivElencoGenre>
                                <span>Elenco:</span>
                                {dataCast.slice(0, 4).map((cast) => (
                                    <>
                                        <p key={cast.id}>{cast.name}</p>
                                        <div>,</div>
                                    </>
                                ))}
                            </s.DivElencoGenre>
                            <s.DivElencoGenre>
                                <span>Gêneros:</span>
                                {currentMovie.genres.map(
                                    (genre: { id: number; name: string }) => (
                                        <>
                                            <p key={genre.id}>{genre.name}</p>
                                            <div>,</div>
                                        </>
                                    )
                                )}
                            </s.DivElencoGenre>
                        </s.ContainerGenresElenco>
                    </s.ContainerDescription>
                    {currentMovie.number_of_seasons && (
                        <ListOfEpisodes currentTv={currentMovie} />
                    )}
                    <SimilarTitles
                        mediaType={currentMovie.name ? "tv" : "movie"}
                        id={currentMovie.id}
                    />
                    <Footer
                        currentMovie={currentMovie}
                        dataCast={dataCast}
                        dataCrew={dataCrew}
                    />
                </s.ContainerMovieInfo>
            </s.Modal>
        </s.Container>
    );
};

export default ModalInfoMovie;
