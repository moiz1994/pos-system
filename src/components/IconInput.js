// import Form from "react-bootstrap/Form";

// const IconInput = ({
//   label,
//   name,
//   inputType,
//   placeholder,
//   value,
//   onChange,
//   icon: IconComponent,
// }) => {
//   return (
//     <div className=" mb-3 mt-3">
//       <Form.Label>{label}</Form.Label>
//       <div className="input-group">
//         <span className="input-group-text px-3 bg-dark">
//           {IconComponent && (
//             <IconComponent className="icon" style={{ color: "#ffffff" }} />
//           )}
//         </span>
//         <input
//           className="form-control"
//           type={inputType}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//           name={name}
//         />
//       </div>
//     </div>
//   );
// };

// export default IconInput;
import React from "react";
import { Form } from "react-bootstrap";

const IconInput = ({
  label,
  name,
  inputType,
  placeholder,
  value,
  onChange,
  icon: IconComponent,
}) => {
  const handleChange = (event) => {
    if (inputType === "file") {
      onChange(event.target.files[0]);
    } else {
      onChange(event.target.value);
    }
  };

  return (
    <div className="mb-3 mt-3">
      <Form.Label>{label}</Form.Label>
      <div className="input-group">
        <span className="input-group-text px-3 bg-dark">
          {IconComponent && (
            <IconComponent className="icon" style={{ color: "#ffffff" }} />
          )}
        </span>
        {inputType === "file" ? (
          <input
            className="form-control"
            type={inputType}
            placeholder={placeholder}
            onChange={handleChange}
            name={name}
          />
        ) : (
          <Form.Control
            type={inputType}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            name={name}
          />
        )}
      </div>
    </div>
  );
};

export default IconInput;
