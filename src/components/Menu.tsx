import { menu } from "@/constants";
import Image from "next/image";

const Menu = () => {
  return (
    <ul className="inline-flex flex-col items-center justify-center gap-20 md:gap-12 md:justify-start flex-1">
      {menu.map((item, index) => (
        <li
          key={item.id}
          className={`inline-flex flex-col items-center justify-center gap-9 relative md:flex-row md:gap-16  ${
            index === 0 ? `` : `menu-line`
          }`}>
          <div className="relative w-full h-[245px] md:w-[128px] md:h-[96px]  menu-line-2 lg:shrink-0">
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="text-center inline-flex flex-col gap-[6px] md:text-left">
            <h3 className="capitalize">{item.title}</h3>
            <p className="text-base/[1.625rem]">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
