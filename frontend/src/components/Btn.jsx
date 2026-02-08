const Btn = ({ className, children }) => {
  return <button className={"btn " + className}>{children}</button>;
};

export default Btn;
