import React, { useEffect, useState } from "react";
import api from "../../../api";
import { DataResults } from "../../../types";

import { ReactComponent as PlayArrow } from "../../../img/play-arrow.svg";

import * as s from "./styles";
import ReactSelect, { SingleValue } from "react-select";

type Props = {
    currentTv: DataResults;
};

type DataEpisodes = {
    name: string;
    overview: string;
    episode_number: number;
    still_path: string;
};

const ListOfEpisodes = ({ currentTv }: Props) => {
    const [data, setData] = useState<DataEpisodes[]>([
        {
            name: "",
            overview: "",
            episode_number: 0,
            still_path: "",
        },
    ]);
    const URL_IMAGE = "https://image.tmdb.org/t/p/w300";
    const [numberTemp, setNumberTemp] = useState<number | undefined>(1);

    useEffect(() => {
        const getTvSeasons = async () => {
            if (!numberTemp) return;
            const result: any = await api.getSeasons(currentTv.id, numberTemp);
            setData(result.episodes);
        };

        getTvSeasons();
    }, [numberTemp]);

    const selectTemp = () => {
        const options = [];
        for (var i = 1; i < currentTv.seasons.length; i++) {
            options.push({ value: i, label: `Temporada ${i}` });
        }

        return options;
    };

    return (
        <s.Container>
            <s.Header>
                <span className="title">Episódios</span>
                <ReactSelect
                    defaultValue={selectTemp()}
                    options={selectTemp()}
                    styles={s.styleSelect}
                    onChange={(
                        option: SingleValue<{
                            value: number;
                            label: string;
                        }>
                    ) => setNumberTemp(option?.value)}
                />
            </s.Header>
            <s.ContainerList>
                {data.map((episode) => (
                    <s.ContainerContent>
                        <span className="numberEp">
                            {episode.episode_number}
                        </span>
                        <s.DivImage>
                            <div className="divSvg">
                                <PlayArrow />
                            </div>
                            <img src={`${URL_IMAGE}${episode.still_path}`} />
                        </s.DivImage>
                        <div>
                            <span className="titleEp">{episode.name}</span>
                            <span className="description">
                                {episode.overview}
                            </span>
                        </div>
                    </s.ContainerContent>
                ))}
            </s.ContainerList>
        </s.Container>
    );
};

export default ListOfEpisodes;
