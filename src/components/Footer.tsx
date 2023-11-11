import Link from "next/link";
import Logo from "/public/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-cod-gray">
      <div className="flex flex-col items-center justify-center py-20 gap-11 md:flex-row md:justify-start md:items-start md:py-16 md:pl-10 md:gap-[130px] lg:max-width lg:gap-[192px]">
        <Link href="/">
          <Logo />
        </Link>
        <div className="text-white uppercase text-sm leading-7 tracking-[0.125rem] font-normal flex flex-col text-center items-center justify-center gap-8 md:items-start md:text-left lg:flex-row lg:gap-32">
          <div>
            <p>Marthwaite, Sedbergh</p>
            <p>Cumbria</p>
            <p>+00 44 123 4567</p>
          </div>
          <div>
            <p>OPEN TIMES</p>
            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
