import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full sm:mt-28 lg:mt-32 md:mt-0"
      id="home"
    >
      <div className="md:w-2/3 lg:w-full container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[4rem] 2xl:text-5xl font-bold">
          <p>Building Your Vision,</p>
          <p>One Project at a Time</p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
        PrimeHold is a leading construction services company dedicated to turning your building dreams into reality. Established with a passion for quality and innovation, we offer a comprehensive range of construction services for both residential and commercial projects.
        </p>
      </div>
      <div className="w-full relative">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src="https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
