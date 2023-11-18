import Menu from "@/components/Menu";
import Divide from "/public/images/patterns/pattern-divide.svg";

const Highlights = () => {
  return (
    <section className=" bg-cod-gray">
      <div className="px-6 pt-[96px] pb-[102px] text-white flex flex-col gap-[85px] items-center justify-center md:px-24 md:gap-14 lg:flex-row lg:pt-[200px] lg:pb-32 lg:max-width lg:justify-between lg:items-start">
        <div className="inline-flex flex-col text-center items-center justify-center gap-3 relative md:px-14 md:gap-6 lg:relative lg:items-start lg:justify-start lg:text-left lg:px-0 lg:flex-1">
          <Divide className="lg:absolute lg:top-[-55px] lg:left-0" />
          <h2 className="pt-10 md:pt-4 lg:pt-0">
            A few highlights from our menu
          </h2>
          <p className="text-base/[1.625rem] md:text-2xl/[1.875rem]">
            We cater for all dietary requirements, but here’s a glimpse at some
            of our diner’s favourites. Our menu is revamped every season.
          </p>
        </div>
        <Menu />
      </div>
    </section>
  );
};

export default Highlights;
