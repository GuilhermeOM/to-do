import { AddButton } from "../AddButton/AddButton";
import "./styles.scss";

export const ToolBar = (): JSX.Element => {
    return (
        <div className="toolbar_container">
            <AddButton onClick={() => console.log("click")}/>
            <div className="toolbar_divider"/>
        </div>
    );
}