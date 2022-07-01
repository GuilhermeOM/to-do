import { Button } from "../Button";
import { Divider } from "../Divider";
import "./styles.scss";

export const ToolBar = (): JSX.Element => {
    return (
        <div className="toolbar_container">
            <Button w="50px" title="+" onClick={() => console.log("click")}/>
            <Divider color="#1D1E22"/>
        </div>
    );
}