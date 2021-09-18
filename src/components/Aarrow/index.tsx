import React from "react";

interface ArrowSVGICONProps {
    fill?: string;
    strokeWidth?: string;
}

const ArrowRightSVGICON = (props: ArrowSVGICONProps): JSX.Element => {
    const fill = props.fill ? props.fill : "#fff";
    return (
        <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
            style={{
                width: "25px",
                height: "15.05px",
                verticalAlign: "middle",
            }}
        >
            <g>
                <g id="arrow-drop-down">
                    <polygon points="63.8,255 191.3,127.5 63.8,0" fill={fill} />
                </g>
            </g>
        </svg>
    );
};

export {ArrowRightSVGICON};
