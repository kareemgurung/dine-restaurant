import Arrow from "/public/images/icons/icon-arrow.svg";

const Select = () => {
  return (
    <div className="inline-flex items-center justify-between bg-white pl-4 pr-3 pb-[15px] border-b-[1px] border-silver-gray cursor-pointer w-[88px] md:w-[97px]">
      <select className="appearance-none bg-white text-2xl/7 w-full">
        <option value="am">AM</option>
        <option value="pm">PM</option>
      </select>
      <div className="w-[16px] h-[8px]">
        <Arrow />
      </div>
    </div>
  );
};

export default Select;
