import { useState } from "react";
import { Divider } from "../Divider"
import { Button } from "../Button";
import { TaskCard } from "../TaskCard";
import {Trash, X} from "phosphor-react";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss"

interface TaskContainerProps {
    children: JSX.Element;
}

interface Card {
    id: string;
}

export const TaskContainer = (props: TaskContainerProps): JSX.Element => {
    const [header, setHeader] = useState<string>("");
    const [cards, setCards] = useState<Card[]>([]);

    const handleHeader = (value: string): void => setHeader(value);
    const handleCards = (): void => setCards([...cards, { id: uuidv4() }]);
    const handleDeleteCard = (key: string): void => setCards(cards.filter((card): boolean => card.id !== key));

    return (
        <div className="taskcontainer_container">
            <header className="taskcontainer_header">
                <input
                    className="taskcontainer_header_input"
                    placeholder="Task title"
                    maxLength={30}
                    value={header}
                    onChange={(event): void => handleHeader(event.target.value)}
                />
                <div style={{ "display": "inline-flex" }}>
                    { props.children }
                </div>
                <Divider color="#1D1E22" />
            </header>
            <div>
                <ul className="taskcontainer_tasks_ul">
                    {cards.map((card): JSX.Element => {
                        return (
                            <li className="taskcontainer_tasks_li" key={card.id}>
                                <TaskCard />
                                <button
                                    className="taskcontainer_button_card_delete"
                                    onClick={(): void => handleDeleteCard(card.id)}
                                >
                                    <Trash size={16} />
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <Button title="+ Add card" h="30px" bg="#121214" onClick={handleCards} />
        </div>
    );
}