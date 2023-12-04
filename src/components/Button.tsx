import Link from "next/link";

type ButtonProps = {
  title: string;
  variant: "btn-dark" | "btn-light";
  link: string;
  width: "btn-small" | "btn-large";
  type: "button" | "submit" | "reset";
};

const Button = ({ title, variant, link, width, type }: ButtonProps) => {
  return (
    <Link
      type={type}
      href={link}
      className={`block text-xl/4 font-semibold uppercase tracking-widest border border-solid py-6 text-center ${variant} ${width}`}>
      {title}
    </Link>
  );
};

export default Button;
