export type DataResults = {
    backdrop_path: string;
    id: number;
    vote_average: number;
    genres: [];
    title: string;
    name: string;
    runtime: number;
    number_of_seasons: number;
    videos: any;
    overview: string;
    release_date: string;
    first_air_date: string;
    seasons: [];
    created_by: [{ name: string }];
};

export interface Element {
    type:
        | "Bloopers"
        | "Featurette"
        | "Behind the Scenes"
        | "Clip"
        | "Trailer"
        | "Teaser";
}
