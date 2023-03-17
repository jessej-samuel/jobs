import { FC } from "react";

type RadioItem = {
  value: string;
  label: string;
};

type RadioInputProps = {
  items: RadioItem[];
  title: string;
  name: string;
};

const RadioInput: FC<RadioInputProps> = ({ name, items, title }) => {
  return (
    <div className="flex flex-col gap-1 text-placeholder text-sm font-normal">
      <label className="text-dark text-sm font-medium min-h-[20px]">
        {title}
      </label>
      <div className="flex flex-row gap-4 py-2">
        {items.map((item) => {
          return (
            <div className="flex flex-row gap-1 items-center" key={item.value}>
              <input
                type="radio"
                name={name}
                value={item.value}
                id={item.value}
                className="appearance-none h-4 w-4  border-2 border-border rounded-full checked:bg-primary checked:border-transparent focus:outline-none"
              />
              <label htmlFor={item.value}>{item.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RadioInput;
