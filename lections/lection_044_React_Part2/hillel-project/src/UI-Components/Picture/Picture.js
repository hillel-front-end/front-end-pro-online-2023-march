const Picture = (props) => {
  const { picture, description, ...addProps } = props;
  return <img src={props.picture} alt={props.description} {...addProps} />;
};

export default Picture;
