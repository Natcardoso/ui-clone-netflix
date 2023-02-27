import React, { useContext, useEffect, useState } from "react";

import api from "../../api";
import { MovieRow } from "../../components/MovieRow";
import { Featured } from "../../components/Featured";
import { Header } from "../../components/Header";
import { CurrentMovieContext } from "../../context/movieCurrent";
import ModalInfoMovie from "../../components/ModalInfoMovie";

import * as s from "./styles";

type DataFeatured = {
    number_of_seasons: number;
};

export const MainPage = () => {
    const [allData, setAllData] = useState<any[]>([]);
    const [featuredData, setFeaturedData] = useState<DataFeatured | any>();
    const { openModalInfo } = useContext(CurrentMovieContext);
    const body = document.querySelector("body");
    if (openModalInfo) {
        body?.setAttribute("style", "overflow: hidden");
    } else {
        body?.setAttribute("style", "overflow: initial");
    }

    useEffect(() => {
        const gettingDataApi = async () => {
            let list = await api.getHomeList();
            setAllData(list);

            let toprated = list.filter((i) => i.slug === "toprated");
            // let randowChosen = Math.floor(
            //     Math.random() * (toprated[0].items.results.length - 1)
            // );
            let chosen = toprated[0].items.results[0];
            let chosenInfo = await api.getMovieInfo(chosen.id, "tv");

            setFeaturedData(chosenInfo);
        };

        gettingDataApi();
    });

    return (
        <s.Container>
            <s.ContainerContaint
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredData?.backdrop_path})`,
                }}
            >
                <Header />
                <Featured featuredData={featuredData} />
                <s.ContainerMovieRow>
                    {allData.map((item) => (
                        <MovieRow
                            key={item.id}
                            title={item.title}
                            items={item.items.results}
                        />
                    ))}
                </s.ContainerMovieRow>
            </s.ContainerContaint>
            {openModalInfo && <ModalInfoMovie />}
        </s.Container>
    );
};
