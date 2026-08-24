
interface Props {
    text: string
}

export function ButtonConnection(props: Props) {
    return (
        <button className=""> {props.text} </button>
    )
}