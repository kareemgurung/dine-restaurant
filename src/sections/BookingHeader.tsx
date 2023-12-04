import Image from "next/image";
import Logo from "/public/images/logo.svg";
import Button from "@/components/Button";

const BookingHeader = () => {
  return (
    <section className="bg-mirage booking-header-bg">
      <div className="px-6 pb-[228px] pt-14 flex flex-col items-center text-center md:px-10  md:pb-[364px] lg:pt-16 lg:pb-[153px] lg:items-start lg:text-left lg:max-width ">
        <Logo className="md:self-start"/>
        <div className="flex flex-col gap-3 mt-11 mb-5 md:mt-[70px] md:mb-0 lg:mt-[153px] lg:gap-[18px] lg:w-[507px]">
          <h1 className="text-white">Reservations</h1>
          <p className="text-white font-normal text-base/[1.625rem] md:text-[1.25rem]/[1.875rem] md:px-16 lg:px-0 lg:pr-20">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
          </p>
        </div>
        <div className="md:hidden">
          <Button
            title="reserve place"
            variant="btn-dark"
            link="/booking"
            width="btn-small"
            type="button"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingHeader;
