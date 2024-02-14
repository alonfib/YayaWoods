import { TextField, TextFieldProps } from "@mui/material";
import React from "react";
import { CustomTextField } from "./MyTextInput";

type TextInputProps = {
  title: string;
  name?: string;
  type?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // moreProps?: TextFieldProps;
} & TextFieldProps;

const TextInput: React.FC<TextInputProps> = ({ title, name, type = "text", placeholder = "", onChange, ...props }) => {
  return (
    <CustomTextField
      color={"primary"}
      onChange={onChange}
      type={type}
      name={name}
      label={title}
      inputProps={{ color: "red" }}
      helperText={""}
      // placeholder={placeholder}
      {...props}
    />
  );
};

export default TextInput;
