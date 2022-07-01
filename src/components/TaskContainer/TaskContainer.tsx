import { useState } from "react";
import { Divider } from "../Divider"
import { Button } from "../Button";
import "./styles.scss"

export const TaskContainer = (): JSX.Element => {
    const [header, setHeader] = useState<string>("");

    const handleHeader = (value: string): void => setHeader(value)

    return (
        <div className="taskcontainer_container">
            <header className="taskcontainer_header">
                <input className="taskcontainer_header_input" placeholder="Task title" maxLength={30} onChange={(event) => handleHeader(event.target.value)}/>
                <Divider color="#1D1E22" />
            </header>
            <div>
                <ul>

                </ul>
                <Button title="+ Add card" h="30px" bg="#121214" onClick={() => console.log("click")} />
            </div>
        </div>
    );
}