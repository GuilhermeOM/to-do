import React from "react";
import "./style.scss";

interface AddButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const AddButton = (props: AddButtonProps): JSX.Element => {
    return (
        <div className="AddButton_container">
            <button
                className="AddButton_button"
                onClick={props.onClick}
            >
                +
            </button>
        </div>
    );
}