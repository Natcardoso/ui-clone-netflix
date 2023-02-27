import React, { useEffect, useState } from "react";

import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as Bell } from "../../img/bell.svg";
import { ReactComponent as Search } from "../../img/search.svg";
import { ReactComponent as ImgProfile } from "../../img/img-profile.svg";

import { Container } from "./styles";

export const Header = () => {
    const [isSrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Container
            style={{
                background: isSrolled ? "var(--black)" : "",
            }}
        >
            <div>
                <Logo className="logo" />
                <span style={{ color: "#fff", fontWeight: 600 }}>Início</span>
                <span>Séries</span>
                <span>Filmes</span>
                <span>Minha lista</span>
            </div>
            <div>
                <Search />
                <span>Infantil</span>
                <Bell />
                <ImgProfile className="imgProfile" />
            </div>
        </Container>
    );
};
