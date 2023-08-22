import classes from "../ProductItem/ProductItem.module.css";
const ProductInfo = (props) => {
  return (
    <>
      <h4 className={classes.title}>{props.title}</h4>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{props.price}</div>
    </>
  );
};

export default ProductInfo;
