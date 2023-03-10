import React from "react";
import { InputField } from "./Input.style";
const Input = (props) => {
  return (
    <InputField
      className='poppins_regular'
      scalestyle='large'
      placeholder={props.placeholder ? props.placeholder : undefined}
      type={props.type ? props.type : "text"}
      name={props.name ? props.name : undefined}
      value={props.value ? props.value : undefined}
      onChange={props.onChange ? props.onChange : undefined}
    />
  );
};

export default Input;
