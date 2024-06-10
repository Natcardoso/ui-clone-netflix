import styled from "styled-components";

export const Container = styled.div`
    height: 110%;
    background: linear-gradient(to top, var(--black) 15%, transparent 30%);
`;

export const ShadowTop = styled.div`
    width: inherit;
    height: inherit;
    padding: 0 3.5rem;
    background: linear-gradient(to right, var(--black) 0%, transparent 100%);
`;

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-top: 10rem;
    z-index: 1;
    margin-bottom: 0.5rem;

    svg {
        width: 3rem;
        height: 3rem;
    }

    span {
        font-weight: 900;
        font-size: 28px;
        line-height: 40px;
        text-transform: uppercase;
        letter-spacing: 0.5rem;
        color: var(--gray-200);
    }
`;

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 4rem;
        text-transform: uppercase;
        font-weight: 900;
        line-height: 4rem;
        max-width: 30rem;
        text-align: start;
    }
`;

export const Sinopse = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    max-width: 700px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: var(--white);
    margin: 26px 0 30px 0;
`;

export const Play = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
        font-size: 22px;
        border-radius: 4px;
        padding: 0.8rem 2rem;
        font-weight: 600;
        cursor: pointer;
        outline: none;
        border: none;
        justify-content: center;
        gap: 1rem;
        display: flex;
        align-items: center;

        span {
            height: 32px;
        }

        :hover {
            opacity: 0.8;
        }
    }

    button:nth-child(1) {
        border: none;
        background-color: var(--white);
        display: flex;
        align-items: center;
    }

    button:nth-child(2) {
        background-color: rgba(109, 109, 110, 0.7);
        color: var(--white);
    }
`;
