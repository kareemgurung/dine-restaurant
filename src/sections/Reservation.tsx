import Button from "@/components/Button";

const Reservation = () => {
  return (
    <section className="bg-ready-bg-mobile md:bg-ready-bg-tablet lg:bg-ready-bg-desktop 2xl:bg-ready-bg-large-desktop bg-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center text-center gap-5 py-20 md:gap-6 lg:flex-row lg:gap-[unset] lg:justify-between lg:py-[5.5rem] lg:max-width">
        <h2 className="tracking-tight md:tracking-[-0.03125rem] text-center text-white">
          Ready to make a reservation?
        </h2>
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

export default Reservation;
