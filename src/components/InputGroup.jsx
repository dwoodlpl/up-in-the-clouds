import React from "react";

function InputGroup(props) {
  const { id, prepend, type, className, placeholder, onChange } = props;
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">{prepend}</div>
      <input
        id={id}
        type={type}
        className={"form-control " + className}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputGroup;
