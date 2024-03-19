const IconInput = ({
  inputType,
  placeholder,
  value,
  onChange,
  icon: IconComponent,
}) => {
  return (
    <div className="custom-input-wrapper mt-4">
      {IconComponent && <IconComponent className="icon" />}
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="custom-input"
      />
    </div>
  );
};

export default IconInput;
