import React from "react";
import "./style.scss";

interface ButtonProps {
    title?: string;
    w?: string;
    h?: string;
    bg?: string;
    color?: string;
    children?: JSX.Element | JSX.Element[];
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

interface Style {
    width?: string;
    height?: string;
    background?: string;
    color?: string;
}

export const Button = (props: ButtonProps): JSX.Element => {
    const style: Style = {
        width: props.w ?? "100%",
        height: props.h ?? "50px",
        background: props.bg ?? "#1DA1F2",
        color: props.color ?? "#F7F7F7"
    }

    return (
        <div>
            <button
                className="button_button"
                onClick={props.onClick}
                style={style}
            >
                { props.title }
                { props.children }
            </button>
        </div>
    );
}