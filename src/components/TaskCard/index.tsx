import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import "./styles.scss";

export const TaskCard = (): JSX.Element => {
    const [content, setContent] = useState<string>("");

    const handleContent = (value: string): void => setContent(value);

    return (
        <div className="taskcard_container">
            <ReactTextareaAutosize
                className="taskcard_textarea"
                spellCheck="false"
                placeholder="Write an action..."
                value={content}
                maxLength={150}
                onChange={(event): void => handleContent(event.target.value)}
            />
        </div>
    );
}