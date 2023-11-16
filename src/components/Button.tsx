import Link from "next/link";

type ButtonProps = {
  title: string;
  variant: "btn-dark" | "btn-light";
  link: string;
  width: "btn-small" | "btn-large"
};

const Button = ({ title, variant, link, width }: ButtonProps) => {
  return (
    <Link
      href={link}
      className={`block text-xl/4 font-semibold uppercase tracking-widest border border-solid  px-14 py-6 text-center ${variant} ${width}`}>
      {title}
    </Link>
  );
};

export default Button;
