const Image = ({ img }) => {
  if (!img) {
    return null;
  } else {
    return <img src={img} className="h-32 w-32 rounded-md" />;
  }
};

export default Image;
