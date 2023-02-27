import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const toApper = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const OptionHoverLike = styled.div`
    display: flex;
    gap: 0.5rem;
    background: var(--black-300);
    border-radius: 50px;
    position: absolute;
    padding: 0.5rem;
    width: max-content;
    animation: ${toApper} 0.5s linear;
    z-index: 1;

    .divLike {
        border-radius: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.3rem;
        width: 32px;
        height: 32px;

        &:hover {
            background: var(--gray-hover);
        }

        svg {
            width: 24px;
            height: 24px;
        }
    }
`;
