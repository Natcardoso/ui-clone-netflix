import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    background: rgb(0 0 0 / 60%);
    z-index: 10;
    display: flex;
    justify-content: center;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

const Apper = keyframes`
    0%{
        opacity: 0;
        transform: scale(0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const Modal = styled.div`
    background: var(--black-200);
    margin-top: 1.8rem;
    width: 58rem;
    border-radius: 10px;
    animation: ${Apper} 0.8s alternate;
    height: max-content;

    img {
        object-fit: cover;
        width: 58rem;
    }
`;

export const DivMovie = styled.div`
    position: relative;
`;

export const DivIconClose = styled.div`
    width: 32px;
    height: 32px;
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    border-radius: 50%;
    background: var(--black-200);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;

    svg {
        width: 20px;
    }
`;

export const ContainerPlayer = styled.div`
    height: 550px;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;

    .react-player {
        transform: scale(1.2, 1.3);
        border-radius: 10px;
        pointer-events: none;
    }
`;

export const ContainerNameButtonMovie = styled.div`
    width: 100%;
    position: absolute;
    bottom: 5em;
    padding: 0 3rem;
    z-index: 1;
`;

export const DivName = styled.div`
    font-size: 2rem;
    width: 350px;
    line-height: 120%;
    margin-bottom: 1rem;
    font-weight: 900;

    span {
        text-shadow: 0 0 2px #24242480;
    }
`;

export const ButtonsInterage = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 2;

    button {
        border-radius: 4px;
        font-size: 18px;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 32px;
        border: none;

        svg {
            margin-right: 1rem;
        }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }

    .iconNoSound {
        opacity: 0.6;

        :hover {
            opacity: 1;
        }
    }
`;

export const DivIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: 2px solid var(--gray);
    width: 42px;
    height: 42px;
    padding: 0.2rem;
    background: var(--black-300);
    position: relative;
    cursor: pointer;

    svg {
        color: var(--white);
        width: 24px;
        height: 24px;
    }

    &:hover {
        border: 2px solid var(--white);
    }
`;

export const ShadowBottom = styled.div`
    background: linear-gradient(to top, var(--black-200) 8%, transparent);
    width: 100%;
    height: 8rem;
    position: absolute;
    bottom: 0;
`;

export const ContainerMovieInfo = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: var(--black-200);
    padding: 3rem;
    padding-top: 0;
    overflow: hidden;
`;

export const ContainerDescription = styled.div`
    font-size: 16px;
    display: flex;
    margin-bottom: 3rem;
`;

export const Info = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    align-items: center;

    span:nth-child(1) {
        color: var(--green);
        font-weight: 600;
    }

    svg {
        width: 18px;
        height: 18px;
    }
`;

export const ContainerInfoSinopse = styled.div`
    width: 70%;
    margin-right: 2.5rem;
`;

export const Sinopse = styled.div`
    font-size: 14px;
    line-height: 24px;
`;

export const ContainerGenresElenco = styled.div`
    width: 30%;

    div {
        div:last-child {
            opacity: 0;
        }
    }
`;

export const DivElencoGenre = styled.div`
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
    line-height: 20px;
    word-break: break-word;

    span {
        color: var(--gray);
    }
`;
