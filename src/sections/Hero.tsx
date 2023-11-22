import { hero } from "@/constants";
import Image from "next/image";
import Divide from "/public/images/patterns/pattern-divide.svg";
import Lines from "/public/images/patterns/pattern-lines.svg";
import TopRight from "/public/images/patterns/pattern-curve-top-right.svg";
import TopLeft from "/public/images/patterns/pattern-curve-top-left.svg";

const Hero = () => {
  return (
    <section>
      <div className="mt-[-72px] px-6 flex flex-col items-center justify-center text-center gap-24 pb-24 md:mt-[-96px] md:px-24 md:pb-28 lg:mt-[-70px] lg:mb-[-70px] lg:max-width lg:text-left lg:pb-0 relative">
        <TopRight className="hidden md:block absolute top-[191px] left-[-517px] opacity-75 lg:left-[-165px] lg:top-[250px]" />
        <TopLeft className="hidden md:block absolute bottom-0 right-[-511px] opacity-75 lg:bottom-[70px] lg:right-[-165px]" />
        {hero.map((item, index) => (
          <article key={item.id} className="flex flex-col gap-[91px] md:gap-28 lg:flex-row lg:items-center lg:even:flex-row-reverse lg:gap-32 relative z-10">
            <div className="relative w-full h-[400px] shadow-3xl md:h-[360px] lg:w-[540px] lg:h-[720px] lg:shrink-0 ">
              {index !== 0 && (
                <Lines className="hidden md:block absolute right-[-58px] bottom-14 z-10 lg:top-0 lg:bottom-0 lg:my-auto" />
              )}
              <Image
                src={item.img}
                alt={item.img}
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative flex flex-col gap-3 md:px-16 md:gap-7 lg:px-0 lg:justify-">
              <Divide className="absolute top-[-36px] left-0 right-0 mx-auto lg:right-[unset]" />
              <h2>{item.title}</h2>
              <p className="text-base/[1.625rem] md:text-2xl/[1.875rem]">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Hero;
