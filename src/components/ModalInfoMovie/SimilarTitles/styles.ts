import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 2.5rem;
`;

export const DivTitle = styled.div`
    display: flex;
    font-size: 22px;
    font-weight: 800;
    margin-bottom: 1rem;
`;

export const ContainerList = styled.div`
    height: max-content;
`;

type Props = {
    collapse: boolean;
};

export const List = styled.div<Props>`
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
    justify-items: stretch;
    height: ${({ collapse }) => (collapse ? "max-content" : "111vh")};
    overflow: hidden;
    padding-bottom: 3rem;
`;

export const DivCard = styled.div`
    background: var(--gray-500);
    position: relative;
    border-radius: 4px;
    height: 355px;
`;

export const DivImage = styled.div`
    overflow: hidden;
    position: relative;

    :before {
        background-image: linear-gradient(
            189deg,
            rgba(0, 0, 0, 0.9),
            hsla(0, 0%, 9%, 0.5) 20%,
            transparent 28%
        );
        bottom: 0;
        content: "";
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
    }

    img {
        width: 100%;
        border-radius: 4px 4px 0 0;
    }

    .nameMovieTv {
        position: absolute;
        right: 0;
        z-index: 1;
        font-weight: 900;
        font-size: 16px;
        position: absolute;
        width: 100%;
        text-align: end;
        padding: 0 1rem;
    }
`;

export const ContainerBody = styled.div`
    padding: 1rem;
    padding-top: 8px;

    .sinopse {
        font-size: 14px;
        color: var(--gray-300);
        line-height: 20px;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        overflow: hidden;
        -webkit-box-orient: vertical;
    }
`;

export const ContainerDivInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

export const DivAddMyList = styled.div`
    display: flex;
    flex-direction: column;

    .relevante {
        color: var(--green);
        font-weight: 800;
        font-size: 16px;
        margin-bottom: -0.5rem;
    }

    .years {
        font-size: 18px;
        font-weight: 500;
        color: var(--white);
    }
`;

export const DivButton = styled.div`
    border-bottom: 2px solid #404040;
    background-image: linear-gradient(
        0deg,
        #181818 0,
        hsla(0, 0%, 9%, 0.7) 20%,
        hsla(0, 0%, 9%, 0.4) 30%,
        transparent 50%
    );
    height: 5rem;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: -5rem;
`;

export const DivIconCollapse = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: 2px solid var(--gray);
    width: 42px;
    height: 42px;
    padding: 0.2rem;
    background: var(--black-300);
    position: absolute;
    bottom: -1.5rem;
    cursor: pointer;

    svg {
        color: var(--white);
        width: 18px;
        height: 18px;
    }

    &:hover {
        border: 2px solid var(--white);
        background: #545454;
    }
`;
