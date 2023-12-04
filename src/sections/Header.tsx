import Image from "next/image";
import Logo from "/public/images/logo.svg";
import Button from "@/components/Button";

const Header = () => {
  return (
    <section className="bg-mirage header-bg">
      <div className="px-6 pb-[152px] pt-[232px] flex flex-col items-center text-center md:px-10 md:pt-[374px] md:pb-[216px] lg:pt-16 lg:pb-[198px] lg:items-start lg:text-left lg:max-width ">
        <Logo />
        <div className="flex flex-col gap-5 mt-9 mb-14 md:px-14 lg:px-0 lg:mt-[153px] lg:mb-10 lg:gap-[10px] lg:w-[507px]">
          <h1 className="text-white px-6 md:px-20 lg:px-0">
            Exquisite dining since 1989
          </h1>
          <p className="text-white font-normal text-base/[1.625rem] md:text-[1.25rem]/[1.875rem] lg:pr-20">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </p>
        </div>
        <Button
          title="book a table"
          variant="btn-dark"
          link="/booking"
          width="btn-small"
          type="button"
        />
      </div>
    </section>
  );
};

export default Header;
