import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-0"
      id="home"
    >
      <div className="md:w-2/3 lg:w-full container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[4rem] 2xl:text-5xl font-bold">
          <p>Urban Oasis for Construction</p>
          <p>and General Goods</p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
        At Citystead, we're more than just a construction company - we're your partner in creating your dream space. Whether you're revitalizing your home, building your business, or simply seeking quality goods for everyday living, Citystead has you covered.
        </p>
      </div>
      <div className="w-full relative">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src="https://www.aggreko.com/-/media/Aggreko/Images/Sectors-and-services/Construction/2017-01-crane-building-scaffolding.jpg?la=en-GB&w=1500&hash=3C1090299D07155312A254D1058542D069C8EC10"
            width={1100}
            height={500}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
