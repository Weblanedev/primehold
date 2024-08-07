"use client";
import Image from "next/image";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const Plan = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-amber-800 text-xl" />
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, price, image, btnText, trail, titleOne, titleTwo, titleThree, titleFour }) => {
  const router = useRouter()
  const purchase = (name, price) => {
    const product = {
      name,
      price,
    }
    localStorage.setItem("item", JSON.stringify(product))
    router.push("/billing") 
  }
  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-12 rounded-3xl border-neutral-200 border">
      <div>
        <Image
          src={image}
          width={300}
          height={300}
          alt="features"
          className="w-full rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        <Plan title={titleOne} />
        <Plan title={titleTwo} />
        {/* <Plan title={titleThree} />
        <Plan title={titleFour} /> */}
      </div>
      <div className="mx-auto">
        <h2 class="text-4xl text-center leading-none flex items-center pb-4 mb-4">
          <span>₦{price}</span>
          <span class="text-lg ml-1 font-normal text-neutral-500">
          </span>
        </h2>
        <Link href="/billing">
          <p
            onClick={() => { purchase(name, price) }}
            className="w-fit capitalize text-base hover:bg-amber-800 hover:shadow-md hover:shadow-amber-800 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-amber-800 hover:border-amber-800 hover:text-white rounded-full">
            {btnText}
          </p>
        </Link>
        <span className="block text-amber-800 mt-5 font-semibold animate-bounce cursor-pointer">
          {trail}
        </span>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [plan, setPlan] = useState("Retail Products");
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="pricing"
    >
      <div>
        <span className="service-name text-center ">Citystead Pricing Plans</span>
        <h2 className="title text-center xl:w-[60%] xl:mx-auto">At Citystead, we offer flexible pricing plans tailored to meet the diverse needs and budgets of our clients.</h2>
      </div>

      <div className="relative transition-all flex gap-1 mx-auto w-fit bg-slate-100 p-2 rounded-full">
        <div
          className={`${plan === "Retail Products" ? "left-2 w-[150px]" : "left-[170px] w-[215px]"
            } transition-all duration-500 absolute top-[.37rem] h-[55px]  rounded-full bg-amber-800`}
        ></div>
        <button
          onClick={() => setPlan("Retail Products")}
          className={`
          ${plan === "Retail Products" ? "text-white" : "text-amber-800"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5  rounded-full`}
        >
          Retail Products
        </button>
        <button
          onClick={() => setPlan("Residential Renovations")}
          className={`
          ${plan === "Residential Renovations" ? "text-white" : "text-amber-800"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5  rounded-full`}
        >
          Residential Renovations
        </button>
      </div>

      {plan === "Retail Products" ? (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Building Materials"
            title="Our selection includes dimensional lumber, pressure-treated lumber, and specialty plywood options."
            price="300,000"
            image="https://images.pexels.com/photos/13758314/pexels-photo-13758314.jpeg?auto=compress&cs=tinysrgb&w=600"
            btnText="Purchase"
            titleOne="Create comfortable and energy-efficient living spaces with our range of drywall and insulation products."
            titleTwo="Protect your home or commercial property from the elements with our selection of roofing and siding materials."

          />
          <PricingCard
            name="Tools and Equipment"
            title="Choose from our extensive collection of power tools, hand tools, and equipment from leading brands such as DeWalt, Makita, and Bosch."
            price="500,000"
            image="https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            btnText="Purchase"
            titleOne="Equip your toolbox with high-quality hand tools for precision work and general tasks."
            titleTwo="Prioritize safety on the job site with our selection of safety equipment and personal protective gear."
          />

          <PricingCard
            name="Home Décor and Furnishings"
            title="ransform your living space with our stylish and functional furniture collections. Whether you're furnishing a living room, dining room, bedroom, or home office."
            price="735,000"
            btnText="Purchase"
            image="https://images.pexels.com/photos/106936/pexels-photo-106936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titleOne="Illuminate your home with our selection of lighting fixtures, including ceiling lights, pendant lights, chandeliers, wall sconces, and lamps."
            titleTwo="Put the finishing touches on your space with our selection of home décor accessories."
          />
        </Carousel>
      ) : (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Basic Renovation Package"
            title="Ideal for minor renovations such as bathroom updates, kitchen refreshes, or small-scale remodeling projects."
            price="5,000,000"
            btnText="Purchase"
            image="https://images.pexels.com/photos/2219035/pexels-photo-2219035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titleOne="Includes consultation, design assistance, labor, and basic materials."
            titleTwo="Additional costs may apply for specialty materials, custom features, or structural modifications."
          />
          <PricingCard
            name="Standard Renovation Package"
            title="Suitable for medium-sized renovation projects such as whole-home remodels or major interior renovations."
            price="10,000,000"
            image="https://images.pexels.com/photos/159375/construction-site-build-construction-work-159375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            btnText="Purchase"
            titleOne="Includes comprehensive design and project management services, labor, and standard materials."
            titleTwo="Additional costs may apply for specialty materials, custom features, or structural modifications."
          />
          <PricingCard
            name="Premium Renovation Package"
            title="Designed for luxury renovations or extensive remodeling projects requiring high-end finishes and custom features."
            price="20,000,000"
            btnText="Purchase"
            image="https://images.pexels.com/photos/1463917/pexels-photo-1463917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            titleTwo="Includes personalized design consultations, project management, premium materials, and expert craftsmanship."
            titleThree="Additional costs may apply for specialty materials, custom features, or structural modifications."
          />
        </Carousel>
      )}
    </section>
  );
};

export default Pricing;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
