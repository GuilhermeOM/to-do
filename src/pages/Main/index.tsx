import { TaskContainer } from "../../components/TaskContainer";
import { ToolBar } from "../../components/ToolBar";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { X } from "phosphor-react";
import "./styles.scss";

interface Task {
    id: string;
}

export const Main = (): JSX.Element => {
    const [taskContainers, setTaskContainers] = useState<Task[]>([]);

    const handleTaskContainers = (): void => setTaskContainers([...taskContainers, { id: uuidv4() }])
    const handleDeleteTaskContainer = (key: string): void => setTaskContainers(taskContainers.filter((taskContainer) => taskContainer.id !== key))

    return (
        <div>
            <ToolBar>
                <Button w="50px" title="+" onClick={() => handleTaskContainers()}/>
                <Divider color="#1D1E22"/>
            </ToolBar>

            <div className="main_content">
                {taskContainers.map((taskContainer: Task) => (
                    <TaskContainer key={taskContainer.id}>
                        <Button h="24px" w="24px" bg="#121214" onClick={() => handleDeleteTaskContainer(taskContainer.id)}>
                            <X size={20}/>
                        </Button>
                    </TaskContainer>)
                )}
            </div>
        </div>
    );
}