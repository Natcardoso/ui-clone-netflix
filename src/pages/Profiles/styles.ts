import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    color: var(--white);

    span {
        font-size: 4rem;
        font-weight: unset;
    }
`;

export const DivProfiles = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    margin-bottom: 5rem;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: var(--gray);
        cursor: pointer;

        img {
            border: 4px solid transparent;
            border-radius: 4px;
            height: 12rem;
            width: 12rem;
            margin-bottom: 0.5rem;
        }

        span {
            font-size: 24px;
        }

        :hover {
            img {
                border: 4px solid var(--white);
            }

            span {
                color: var(--white);
            }
        }
    }
`;

export const Button = styled.button`
    font-size: 22px;
    color: var(--gray);
    border: 1px solid var(--gray);
    background-color: transparent;
    padding: 0.5em 1.5em;
    cursor: pointer;
    line-height: 2rem;

    :hover {
        color: var(--white);
        border: 1px solid var(--white);
    }
`;
