import React, { useState } from "react";

import { ReactComponent as ThumbsDown } from "../../../img/rating/deslike.svg";
import { ReactComponent as ThumbsUp } from "../../../img/rating/like.svg";
import { ReactComponent as ThumbsSuperLike } from "../../../img/rating/superLike.svg";
import { ReactComponent as ThumbsDownClick } from "../../../img/rating/click/deslike.svg";
import { ReactComponent as ThumbsUpClick } from "../../../img/rating/click/like.svg";
import { ReactComponent as ThumbsSuperLikeClick } from "../../../img/rating/click/superLike.svg";

import { Container, OptionHoverLike } from "./style";
import { Tooltip } from "../../Tooltip";

type Props = {
    hoverLike: boolean;
};

export const LikeDeslike = ({ hoverLike }: Props) => {
    const [rateIcon, setRateIcon] = useState<JSX.Element>(<ThumbsUp />);
    const arrayIcon = [
        {
            name: "deslike",
            textTooltip: "Não é pra mim",
            compIcon: <ThumbsDown />,
            click: <ThumbsDownClick />,
        },
        {
            name: "like",
            textTooltip: "Gostei",
            compIcon: <ThumbsUp />,
            click: <ThumbsUpClick />,
        },
        {
            name: "superLike",
            textTooltip: "Amei!",
            compIcon: <ThumbsSuperLike />,
            click: <ThumbsSuperLikeClick />,
        },
    ];

    return (
        <Container>
            {rateIcon}
            <OptionHoverLike style={{ display: hoverLike ? "flex" : "none" }}>
                {arrayIcon.map((icon) => (
                    <Tooltip text={icon.textTooltip}>
                        <div
                            className="divLike"
                            onClick={() => {
                                setRateIcon(icon.click);
                            }}
                        >
                            {rateIcon === icon.compIcon
                                ? icon.click
                                : icon.compIcon}
                        </div>
                    </Tooltip>
                ))}
            </OptionHoverLike>
        </Container>
    );
};
