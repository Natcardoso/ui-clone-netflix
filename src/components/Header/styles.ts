import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3.5rem;
    height: max-content;
    height: 68px;
    position: fixed;
    z-index: 10;
    background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.7) 10%,
        transparent
    );
    transition: all 0.4s ease;

    div {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        span {
            transition: color 0.4s ease 0s;
            color: rgb(229, 229, 229);
            cursor: pointer;
            font-weight: 400;
            font-size: 14px;

            :hover {
                color: rgb(179, 179, 179);
            }
        }
    }

    .logo {
        width: 5.5%;
        height: max-content;
        margin-right: 1rem;
    }

    div:nth-child(2) {
        svg:not(:last-child) {
            width: 24px;
            height: 24px;
        }

        svg:last-child {
            width: 32px;
            height: 32px;
        }
    }
`;
