import styled from "styled-components";

export const Container = styled.div``;

export const DivTitle = styled.div`
    display: flex;
    gap: 0.3rem;
    font-size: 22px;

    span:nth-child(2) {
        font-weight: 600;
    }
`;

export const ContainerInfoDescription = styled.div`
    font-size: 14px;
    margin-top: 1rem;

    div {
        display: flex;
        width: 100%;
        line-height: 20px;
        margin: 0.5em 0.5em 0.5em 0;
        flex-wrap: wrap;
        word-break: break-word;
        gap: 0.2rem;

        span {
            color: var(--gray);
        }

        .virgula:last-child {
            opacity: 0;
        }
    }
`;
