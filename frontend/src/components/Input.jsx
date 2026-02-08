const Input = ({
  dataId,
  type,
  placeholder,
  label,
  name,
  children,
  dataType,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete="off"
        data-type={dataType !== undefined ? dataType : type}
        data-id={dataId}
      />
      {children}
    </div>
  );
};

export default Input;
