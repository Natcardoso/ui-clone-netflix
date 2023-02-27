import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: max-content;
    display: flex;
    justify-content: center;
    z-index: 1;

    .tooltip {
        text-align: center;
        font-size: 16px !important;
        color: #fff;
        position: absolute;
        top: -2.8rem;
        background: #fff;
        padding: 2px 12px;
        border-radius: 4px;
        width: max-content;
        font-weight: 600;
        color: var(--black);

        &:after {
            content: " ";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -6px;
            border-width: 6px;
            border-style: solid;
            border-color: #fff transparent transparent transparent;
        }
    }
`;
