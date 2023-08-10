export default function ProductItem(props) {
    return (
        <li>
            {props.title},
            {props.description},
            ${props.price}
        </li>
    )
}
