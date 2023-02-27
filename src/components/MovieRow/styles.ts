import styled from "styled-components";

export const ContainerRow = styled.div`
    margin: 3.5vw 0;

    &:hover .progressBar,
    &:hover .handle {
        opacity: 1;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 calc(0.25rem * 2 + 3.5rem);
    align-items: center;
`;

export const Title = styled.div`
    font-size: 1.6rem;
    margin: 0;
    font-weight: 700;
`;

export const ProgressBar = styled.div`
    display: flex;
    gap: 0.25rem;
    opacity: 0;

    .item {
        flex: 0 0 1.5rem;
        width: 1.5rem;
        height: 0.2rem;
        background-color: rgba(255, 255, 255, 0.5);
    }

    #active {
        background-color: rgba(255, 255, 255, 0.9);
    }
`;

export const Container = styled.div`
    scroll-behavior: smooth;
    display: flex;
    justify-content: center;
`;

export const HandleRightLeft = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    z-index: 10;
    transition: all 0.3s ease;
    background-color: #0d0d0d8f;
    border-radius: 0.25rem;
    flex-grow: 0;
    flex-shrink: 0;
    margin: 0.25rem 0;
    width: 3.5rem;
    cursor: pointer;
    color: var(--white);
    line-height: 0;
    transition: background-color 150ms ease-in-out;
    opacity: 0;

    svg:hover {
        transform: scale(1.2);
    }

    .left {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .right {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

type PropsSlider = {
    sliderIndex: number;
};

export const Slider = styled.div<PropsSlider>`
    --items-per-screen: 6;
    display: flex;
    flex-grow: 1;
    margin: 0 0.25rem;
    transform: ${({ sliderIndex }) =>
        `translateX(calc(${sliderIndex} * -100%))`};
    transition: transform 0.5s ease-in-out;
    width: max-content;
`;
