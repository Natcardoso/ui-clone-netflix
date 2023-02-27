import React from "react";

const API_KEY = "44f7e70c4e35df75210375bb0dbd40c9";
const BASE_URL = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint: string) => {
    const request = await fetch(`${BASE_URL}${endpoint}`);
    const result = await request.json();
    return result;
};

export default {
    getHomeList: async () => {
        return [
            {
                slug: "originals",
                title: "Populares na Netflix",
                items: await basicFetch(
                    `/discover/movie?api_key=${API_KEY}&with_networks=213`
                ),
            },
            {
                slug: "trending",
                title: "Recomendados para Você",
                items: await basicFetch(
                    `/trending/all/week?api_key=${API_KEY}&language=pt-BR`
                ),
            },
            {
                slug: "toprated",
                title: "Em Alta",
                items: await basicFetch(
                    `/tv/top_rated?api_key=${API_KEY}&language=pt-BR&page=1`
                ),
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(
                    `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=28`
                ),
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(
                    `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=35`
                ),
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(
                    `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=27`
                ),
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(
                    `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10749`
                ),
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch(
                    `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=99`
                ),
            },
        ];
    },

    getMovieInfo: async (id: number, mediaType: string) => {
        let info = {};

        if (id) {
            info = await basicFetch(
                `/${mediaType}/${id}?api_key=${API_KEY}&language=pt-BR&append_to_response=videos`
            );
        }

        return info;
    },

    getTvInfo: async (tvId: number) => {
        let info = {};

        if (tvId) {
            info = await basicFetch(
                `/tv/${tvId}?api_key=${API_KEY}&language=pt-BR`
            );
        }

        return info;
    },

    getSeasons: async (tvId: number, seasonNumber: number) => {
        let info = {};

        if (tvId) {
            info = await basicFetch(
                `/tv/${tvId}/season/${seasonNumber}?api_key=${API_KEY}&language=pt-BR`
            );
        }

        return info;
    },

    getCast: async (id: number, mediaType: string) => {
        let info = {};

        if (id) {
            info = await basicFetch(
                `/${mediaType}/${id}/credits?api_key=${API_KEY}&language=pt-BR`
            );
        }

        return info;
    },

    getSimilarTitle: async (id: number, mediaType: string) => {
        let info = {};

        if (id) {
            info = await basicFetch(
                `/${mediaType}/${id}/similar?api_key=${API_KEY}&language=pt-BR`
            );
        }

        return info;
    },
};
