import styled from "styled-components";

export const DivIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    border: 2px solid var(--gray);
    width: 36px;
    height: 36px;
    padding: 0.3rem;
    background: var(--black-300);
    position: relative;
    cursor: pointer;

    svg {
        color: var(--white);
        width: 18px;
        height: 18px;
    }

    &:hover {
        border: 2px solid var(--white);
    }
`;
