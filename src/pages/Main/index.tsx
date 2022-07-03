import { TaskContainer } from "../../components/TaskContainer";
import { ToolBar } from "../../components/ToolBar";
import "./styles.scss";

export const Main = (): JSX.Element => {
    return (
        <div>
            <ToolBar />

            <div className="main_content">
                <TaskContainer />
                <TaskContainer />
                <TaskContainer />
            </div>
        </div>
    );
}