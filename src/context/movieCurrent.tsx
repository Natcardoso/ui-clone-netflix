import { createContext, useEffect, useState } from "react";
import api from "../api";
import { DataResults } from "../types";

type INITIAL_STATE = {
    setOpenModalInfo: React.Dispatch<React.SetStateAction<boolean>>;
    openModalInfo: boolean;
    setCurrentMovie: React.Dispatch<React.SetStateAction<DataResults>>;
    currentMovie: DataResults;
};

interface Props {
    children?: React.ReactNode;
}

export const CurrentMovieContext = createContext<INITIAL_STATE>(
    {} as INITIAL_STATE
);

export const CurrentMovieProvider = ({ children }: Props) => {
    const [currentMovie, setCurrentMovie] = useState<DataResults>({
        backdrop_path: "",
        id: 0,
        vote_average: 0,
        title: "",
        name: "",
        runtime: 0,
        number_of_seasons: 0,
        videos: {},
        overview: "",
        release_date: "",
        first_air_date: "",
        genres: [],
        seasons: [],
        created_by: [{ name: "" }],
    });
    const [openModalInfo, setOpenModalInfo] = useState(false);

    return (
        <CurrentMovieContext.Provider
            value={{
                setOpenModalInfo,
                openModalInfo,
                setCurrentMovie,
                currentMovie,
            }}
        >
            {children}
        </CurrentMovieContext.Provider>
    );
};
