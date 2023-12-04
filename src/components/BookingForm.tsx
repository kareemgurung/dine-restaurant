import Button from "./Button";
import Counter from "./Counter";
import Input from "./Input";
import Select from "./Select";

const BookingForm = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <form className="form-position flex flex-col justify-between px-8 pt-[34px] pb-8 shadow-3xl md:px-12 md:pb-12 md:pt-[50px] md:w-[540px]">
      <Input type="text" name="name" placeholder="Name" inputWidth="lg" />
      <Input type="email" name="email" placeholder="Email" inputWidth="lg" />
      <div className="inline-flex flex-col gap-2 items-start w-full md:flex-row md:justify-between md:items-center">
        <p className="text-2xl/7 font-normal">Pick a date</p>
        <div className="inline-flex flex-row justify-between w-full md:w-max md:justify-normal md:gap-4">
          <Input type="number" name="day" placeholder="DD" inputWidth="sm" />
          <Input type="number" name="month" placeholder="MM" inputWidth="sm" />
          <Input type="number" name="year" placeholder="YYYY" inputWidth="md" />
        </div>
      </div>
      <div className="inline-flex flex-col gap-2 items-start w-full md:flex-row md:items-center md:justify-between">
        <p className="text-2xl/7 font-normal">Pick a time</p>
        <div className="inline-flex flex-row justify-between w-full md:w-max md:justify-normal md:gap-4">
          <Input type="number" name="hour" placeholder="09" inputWidth="sm" />
          <Input type="number" name="minute" placeholder="00" inputWidth="sm" />
          <Select />
        </div>
      </div>
      <Counter />
      <Button
        title="make reservation"
        variant="btn-light"
        link="/booking"
        width="btn-large"
        type="submit"
      />
    </form>
  );
};

export default BookingForm;

