import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import api from "../../../api";
import { DataResults } from "../../../types";
import AddMyList from "../../Button/AddMyList";
import { Tooltip } from "../../Tooltip";
import { DivIcon } from "../styles";
import * as s from "./styles";

type Props = {
    id: number;
    mediaType: string;
};

const SimilarTitles = ({ id, mediaType }: Props) => {
    const [allData, setAllData] = useState<DataResults[]>([]);
    const URL_IMAGE = "https://image.tmdb.org/t/p/w300";
    const [collapseOpen, setCollapseOpen] = useState(false);

    useEffect(() => {
        const getSimilar = async () => {
            const result: any = await api.getSimilarTitle(id, mediaType);
            setAllData(result.results);
        };

        getSimilar();
    }, []);

    return (
        <s.Container>
            <s.DivTitle>
                <span>Títulos semelhantes</span>
            </s.DivTitle>
            <s.ContainerList>
                <s.List collapse={collapseOpen}>
                    {allData.map((data) => {
                        const formatVoteAverage = `${data?.vote_average}`
                            .replace(".", "")
                            .substring(2, 0);

                        return (
                            <s.DivCard>
                                <s.DivImage>
                                    <img
                                        src={`${URL_IMAGE}${data.backdrop_path}`}
                                    />
                                    <span className="nameMovieTv">
                                        {data.name ? data.name : data.title}
                                    </span>
                                </s.DivImage>
                                <s.ContainerBody>
                                    <s.ContainerDivInfo>
                                        <s.DivAddMyList>
                                            <span className="relevante">
                                                {formatVoteAverage}
                                                {formatVoteAverage.length ===
                                                    1 && "0"}
                                                % relevante
                                            </span>
                                            <span className="years">
                                                {data.title
                                                    ? data.release_date.substring(
                                                          4,
                                                          0
                                                      )
                                                    : data.first_air_date.substring(
                                                          4,
                                                          0
                                                      )}
                                            </span>
                                        </s.DivAddMyList>
                                        <AddMyList sizeIcon={"42px"} />
                                    </s.ContainerDivInfo>
                                    <div className="sinopse">
                                        {data.overview}
                                    </div>
                                </s.ContainerBody>
                            </s.DivCard>
                        );
                    })}
                </s.List>
                <s.DivButton>
                    <s.DivIconCollapse
                        onClick={() => setCollapseOpen(!collapseOpen)}
                    >
                        {collapseOpen ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                    </s.DivIconCollapse>
                </s.DivButton>
            </s.ContainerList>
        </s.Container>
    );
};

export default SimilarTitles;
