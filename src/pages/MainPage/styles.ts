import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background: var(--black-200);
    color: var(--white);
    flex-direction: column;
`;

export const ContainerContaint = styled.div`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ContainerMovieRow = styled.div`
    position: absolute;
    left: 0;
    top: 42em;
    width: 100%;
    overflow: hidden;
    padding: 5rem 0;
`;
