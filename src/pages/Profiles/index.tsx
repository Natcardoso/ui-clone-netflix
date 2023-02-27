import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ImgProfile } from "../../img/img-profile.svg";
import * as s from "./styles";

export const Profiles = () => {
    const nameProfile = [
        "Natália",
        "Matheus",
        "Ana julia",
        "Edilene",
        "Wagner",
    ];

    const navigate = useNavigate();

    return (
        <s.Container>
            <span>Quem está assistindo?</span>
            <s.DivProfiles>
                {nameProfile.map((name) => (
                    <div key={name} onClick={() => navigate("/netflix")}>
                        <img src="https://occ-0-331-185.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZf5kiIAuiZG_DvLse1xSkgukFUqHQQR5d6qSDQBlw720nd7cYHcXavvtFNfg5814g1njOdPHGbrKYs9KdWq9hnEqL2-xxh5MA.png?r=1d4" />
                        <span>{name}</span>
                    </div>
                ))}
            </s.DivProfiles>
            <s.Button type="button">Gerenciar perfis</s.Button>
        </s.Container>
    );
};
