type InputProps = {
  name: string;
  placeholder: string;
  type: string;
  inputWidth: "sm" | "md" | "lg";
  maxWidth?: boolean;
  maxLength?: string;
  minLength?: string;
  minSize?: string;
  maxSize?: string;
};

const Input = ({
  name,
  placeholder,
  type,
  maxWidth,
  minLength,
  maxLength,
  minSize,
  maxSize,
  inputWidth,
}: InputProps) => {
  const isNumber = type === "number";

  let setWidth: string;

  if (inputWidth === "sm") {
    setWidth = "w-[73px] md:w-[80px]";
  } else if (inputWidth === "md") {
    setWidth = "w-[88px] md:w-[97px]";
  } else {
    setWidth = "w-full";
  };

  return (
    <div className={`block ${setWidth}`}>
      <label htmlFor={name} className="sr-only">
        {name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`block w-full outline-none border-b-[1px] pb-[15px] pl-[16px] text-2xl/7 text-cod-gray border-silver-gray 
                  focus:border-cod-gray invalid:border-red invalid:text-red placeholder:w-max-content 
                    ${isNumber ? "" : ""}`}
      />
    </div>
  );
};

export default Input;
