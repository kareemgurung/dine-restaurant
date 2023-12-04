"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { events } from "@/constants";
import { useState } from "react";
import Lines from "/public/images/patterns/pattern-lines.svg";

const Events = () => {
  const [card, setCard] = useState(0);

  const handleClick = (id: number) => {
    setCard(id);
  };

  return (
    <section className="events-bg">
      <div className="flex flex-col items-center justify-center text-center pt-20 pb-24 px-6 gap-12 md:px-10 md:pt-[120px] lg:max-width lg:flex-row lg:justify-between lg:gap-[125px] lg:py-40">
        <div className="relative w-full h-[400px] md:h-[360px] shadow-3xl md:px-12 md:w-3/4 lg:w-[540px] lg:h-[600px] lg:px-[unset] lg:flex-1">
          <Image
            src={events[card].img}
            alt="family gathering"
            fill
            className="object-cover object-center"
          />
          <Lines className="hidden md:block absolute top-[-38px] left-[-58px]" />
        </div>
        <div className="flex flex-col gap-7 md:gap-14 lg:flex-1 lg:flex-col-reverse lg:justify-start lg:items-start">
          <ul className="inline-flex flex-col gap-4 md:flex-row md:justify-evenly lg:flex-col lg:items-start lg:justify-center lg:gap-3">
            {events.map((event, index) => (
              <li
                key={event.id}
                className={`text-xl/7 uppercase text-event-gray font-semibold text-center tracking-[0.15625rem] cursor-pointer relative ${
                  card === Number(event.id) - 1
                    ? `opacity-100 after-underline`
                    : `opacity-50 hover:opacity-100`
                }`}
                onClick={() => {
                  handleClick(index);
                }}>
                {event.title}
              </li>
            ))}
          </ul>
          <div className="inline-flex flex-col gap-16 items-center justify-center md:px-[116px] lg:items-start lg:justify-start lg:px-0 lg:text-left">
            <div className="inline-flex flex-col gap-3 md:gap-5">
              <h2 className="capitalize tracking-tight text-ebony-clay">
                {events[card].title}
              </h2>
              <p className="text-ebony-clay text-center text-base/[1.625rem] font-normal md:text-xl/[1.875rem] lg:text-left">
                {events[card].desc}
              </p>
            </div>
            <Button
              title="book a table"
              variant="btn-light"
              link="/booking"
              width="btn-small"
              type="button"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
