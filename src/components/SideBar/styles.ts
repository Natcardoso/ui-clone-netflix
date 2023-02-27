import styled from "styled-components";

export const Navigate = styled.div`
    width: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
    position: fixed;
    height: 100%;
    background: var(--black-200);
    z-index: 2;

    div {
        border-left: 2px solid var(--black-200);
        cursor: pointer;
        width: 100%;
        text-align: center;
        padding: 1rem 0;

        :hover {
            border-left: 2px solid var(--red);
        }
    }
`;
