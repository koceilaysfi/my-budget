const Spinner = ({ size, className }) => {
  return (
    <div className={"spinner " + className} style={{ height: size, width: size }}></div>
  );
};

export default Spinner;
