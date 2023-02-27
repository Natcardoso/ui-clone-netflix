import styled from "styled-components";

export const styleSelect = {
    control: (style: any, state: any) => ({
        ...style,
        background: "var(--black-300)",
        boxShadow: "none",
        border: "1px solid #4d4d4d",
        width: "12rem",
        "&:hover": {
            border: "1px solid #4d4d4d",
        },
    }),
    singleValue: (style: any) => ({
        ...style,
        color: "var(--white)",
    }),
    indicatorSeparator: (style: any) => ({
        ...style,
        display: "none",
    }),
    dropdownIndicator: (style: any, state: any) => ({
        ...style,
        color: "var(--white)",
        transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
        "&:hover": {
            color: "var(--white)",
        },
    }),
    menu: (style: any) => ({
        ...style,
        color: "var(--white)",
        background: "var(--black-300)",
        border: "1px solid #4d4d4d",
    }),
    option: (style: any, isSelected: any) => ({
        ...style,
        "&:hover": {
            background: "var(--gray-400)",
        },
        background: isSelected && "transparent",
    }),
};

export const Container = styled.div`
    margin-bottom: 3rem;

    .title {
        font-size: 24px;
        font-weight: 800;
    }
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    .DivSelect {
        display: flex;
        align-items: center;
        border-radius: 4px;
        border: 1px solid #4d4d4d;
        background-color: var(--black-300);
        position: relative;
        padding: 0.5rem 1rem;

        select {
            width: 100%;
            font-size: 1rem;
            width: 10rem;
            color: var(--white);
            border: none;
            background-color: transparent;
            font-weight: 600;
            outline: none;
        }
    }
`;

export const ContainerList = styled.div`
    margin-top: 1rem;
`;

export const ContainerContent = styled.div`
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px solid var(--gray-400);
    cursor: pointer;

    &:first-child {
        background: var(--gray-400);
    }

    &:hover .divSvg {
        opacity: 1;
    }

    .numberEp {
        color: var(--gray-300);
        font-weight: 600;
        font-size: 24px;
    }

    div {
        display: flex;
        flex-direction: column;

        .titleEp {
            font-weight: 600;
        }

        .description {
            font-size: 14px;
            color: var(--gray-300);
        }
    }
`;

export const DivImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 150px !important;
        height: 90px;
        object-fit: cover;
        margin: 0 1rem;
        border-radius: 4px;
    }

    .divSvg {
        position: absolute;
        border-radius: 50%;
        border: 1px solid var(--white);
        padding: 0.5rem;
        background-color: rgba(30, 30, 20, 0.5);
        opacity: 0;
        transition: all 0.3s ease;

        svg {
            color: var(--white);
            width: 32px;
            height: 32px;
        }
    }
`;
