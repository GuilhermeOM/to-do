import "./styles.scss"

interface DividerProps {
    color: string;
}

export const Divider = (props: DividerProps): JSX.Element => {
    return <div className="divider" style={{ "background": props.color }} />
}