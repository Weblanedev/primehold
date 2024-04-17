import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="services">
      <span className="service-name text-center">Our Services</span>
      <h2 className="title text-center">Dive into the services we provide</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Construction Expertise"
          desc="Whether it's renovating a historic brownstone or constructing a modern office space, we're committed to delivering high-quality craftsmanship and attention to detail."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Residential Renovations"
          desc="From kitchen and bathroom makeovers to whole-home remodels, we specialize in maximizing space and functionality while preserving the unique character of your home."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Commercial Construction"
          desc="Whether you're opening a new storefront, expanding your office space, or renovating a commercial property, our team provides comprehensive construction services tailored to your needs"
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc=" Our knowledgeable staff is here to assist you every step of the way. Whether you're a seasoned contractor or a first-time DIYer, we provide expert advice and personalized recommendations."
        />
      </div>
    </section>
  );
};

export default Features;
