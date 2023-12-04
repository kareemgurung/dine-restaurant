import BookingForm from "@/components/BookingForm";
import BottomRight from "/public/images/patterns/pattern-curve-bottom-right.svg";
import Lines from "/public/images/patterns/pattern-lines.svg";

const BookingHero = () => {
  return (
    <section>
      <div className="w-full relative px-6 md:px-0 lg:max-width lg:h-[320px] ">
        <BottomRight className="hidden absolute left-[-165px] lg:block" />
        <Lines  className="hidden absolute left-0 right-0 mx-auto top-[165px] lg:block"/>
        <BookingForm />
      </div>
    </section>
  );
};

export default BookingHero;
