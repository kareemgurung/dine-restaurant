import Link from "next/link";

const Button = () => {
  return (
    <Link
      href="/booking"
      className="bg-transparent text-xl/4 text-white font-semibold uppercase tracking-widest border border-solid border-white px-14 py-6 hover:bg-white hover:text-cod-gray">
      book a table
    </Link>
  );
};

export default Button;
