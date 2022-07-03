import "./styles.scss";

interface ToolBarProps {
    children: JSX.Element | JSX.Element[]
}

export const ToolBar = ({ children }: ToolBarProps): JSX.Element => {
    return (
        <div className="toolbar_container">
            {children}
        </div>
    );
}