import React from "react";

import { Navigate } from "./styles";

import { ReactComponent as Calendar } from "../../img/calendar.svg";
import { ReactComponent as Group } from "../../img/group.svg";
import { ReactComponent as Search } from "../../img/search.svg";
import { ReactComponent as Traced } from "../../img/traced.svg";
import { ReactComponent as Home } from "../../img/home.svg";
import { ReactComponent as Tv } from "../../img/tv.svg";

export const SideBar = () => {
    return (
        <Navigate>
            <div>
                <Search />
            </div>
            <div>
                <Home />
            </div>
            <div>
                <Calendar />
            </div>
            <div>
                <Tv />
            </div>
            <div>
                <Traced />
            </div>
            <div>
                <Group />
            </div>
        </Navigate>
    );
};
