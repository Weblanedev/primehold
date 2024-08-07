"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative container px-5 md:px-16 mx-auto">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        <div className="relative w-full flex-1">
          <Image
            src="https://images.pexels.com/photos/2138126/pexels-photo-2138126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={500}
            height={500}
            alt="video banner"
            className="object-contain w-full"
          />
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">
            <span className="service-name text-center lg:text-left">
            Why Choose Citystead?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
              Business Goals Achieved with Design
            </h2>
          </div>
          <ServiceCard
            imgSrc={"/features/3.svg"}
            title="Quality Assurance"
            desc="We source our materials from trusted suppliers to ensure superior quality and durability."
          />
          <ServiceCard
            imgSrc={"/features/2.svg"}
            title="Sustainable Solutions"
            desc="As stewards of the environment, we prioritize eco-friendly products and practices in all our construction projects and retail offerings."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
