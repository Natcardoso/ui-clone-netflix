import React, { ReactElement, useState } from "react";

import { Container } from "./style";

type Props = {
    text: string;
    children: ReactElement;
};

export const Tooltip = ({ text, children }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <Container>
            {show && <div className={"tooltip"}>{text}</div>}
            <div
                onMouseOver={() => setShow(true)}
                onMouseOut={() => setShow(false)}
            >
                {children}
            </div>
        </Container>
    );
};
