const ProductPicture = (props) => {
    return <img
        src={props.picture}
        alt={props.description}
    />
}

export default ProductPicture;