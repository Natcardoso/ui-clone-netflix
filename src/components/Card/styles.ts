import styled from "styled-components";

export const Container = styled.div`
    padding: 0 0.25rem;
    max-width: calc(100% / var(--items-per-screen));
    aspect-ratio: 16 / 9;
    flex: 0 0 calc(100% / var(--items-per-screen));
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.8s ease;

    img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
        user-select: none;
        border-radius: 0.25rem;
    }

    &:hover {
        transform: scale(1.3);
        z-index: 2;
    }

    &:hover > .ContainerDescription {
        display: block;
        opacity: 1;
    }
`;

export const ContainerMovieMouse = styled.div`
    height: max-content;
    width: 100%;
    background-color: var(--black-200);
    padding-bottom: 0.5rem;
    border-radius: 0.2vw;
    position: absolute;
    z-index: 20;
    display: none;
    opacity: 0;
`;

export const Title = styled.div`
    line-height: 120%;
    font-size: 0.8rem;
    font-weight: 700;
`;

export const DivAllInfo = styled.div`
    padding: 0 1rem;
`;

export const ContainerIcons = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
`;

export const IconsMovie = styled.div`
    display: flex;
    gap: 0.5rem;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-direction: row;

    span {
        font-size: 0.6rem;
    }

    span:nth-child(1) {
        font-weight: 700;
        color: var(--green);
    }
`;

export const Categories = styled.div`
    color: var(--white);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    line-height: 120%;
    margin-top: 0.2rem;
    font-size: 0.7rem;
    width: max-content;

    svg {
        width: 4px;
    }

    svg:last-child {
        opacity: 0;
    }
`;
