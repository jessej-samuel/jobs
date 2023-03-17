import { FC } from "react";

type TextFieldProps = {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  type?: "text" | "email" | "password" | "number";
};

const TextField: FC<TextFieldProps> = ({
  name,
  label = "",
  placeholder = "",
  required = false,
  className = "",
  type = "text",
}) => {
  return (
    <div className={"flex flex-col gap-1 " + className}>
      <label
        htmlFor={name}
        className="text-dark text-sm font-medium min-h-[20px]"
      >
        {label}
        {required ? <span className="text-error">*</span> : null}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="border border-border px-3 py-2 placeholder-placeholder rounded-[5px] focus:outline-primary"
        placeholder={placeholder || ""}
        required={required}
      />
    </div>
  );
};

export default TextField;
