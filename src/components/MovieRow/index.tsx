import React, { useRef, useState } from "react";

import { DataResults } from "../../types";
import { Card } from "../Card";

import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

import * as s from "./styles";

type Props = {
    title: string;
    items: [];
};

export const MovieRow = ({ title, items }: Props) => {
    const carousel = useRef<HTMLDivElement>(null);
    const refProgressBar = useRef<HTMLDivElement>(null);
    const refSlider = useRef<HTMLDivElement | null>(null);
    const [sliderIndex, setSliderIndex] = useState(0);
    const divArray = ["", "", ""];

    const handleLeftArrow = () => {
        if (sliderIndex < 1) {
            setSliderIndex(2);
        } else {
            setSliderIndex(sliderIndex - 1);
        }
    };

    const handleRightArrow = () => {
        if (sliderIndex > 1) {
            setSliderIndex(0);
        } else {
            setSliderIndex(sliderIndex + 1);
        }
    };

    return (
        <s.ContainerRow>
            <s.Header>
                <s.Title>{title}</s.Title>
                <s.ProgressBar className="progressBar" ref={refProgressBar}>
                    {divArray.map((e, i) => (
                        <div
                            className="item"
                            id={sliderIndex === i ? "active" : ""}
                        ></div>
                    ))}
                </s.ProgressBar>
            </s.Header>
            <s.Container ref={carousel}>
                <s.HandleRightLeft className="handle" onClick={handleLeftArrow}>
                    <CgChevronLeft className="left" size={50} />
                </s.HandleRightLeft>
                <s.Slider sliderIndex={sliderIndex} ref={refSlider}>
                    {items.map((item: DataResults) => (
                        <Card key={item.id} movieData={item} />
                    ))}
                </s.Slider>
                <s.HandleRightLeft
                    className="handle"
                    onClick={handleRightArrow}
                >
                    <CgChevronRight className="right" size={50} />
                </s.HandleRightLeft>
            </s.Container>
        </s.ContainerRow>
    );
};
