import backgroundImage from "../assets/background_section2.jpg";
const OurStats = () => {
  return (
    <div
      className="relative flex flex-col justify-around items-center gap-8 bg-cover bg-center bg-no-repeat w-full h-full lg:h-screen "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute bg-[#221b30] opacity-80 inset-0"> </div>
      <div className="flex flex-col flex-wrap justify-center items-center  gap-4 lg:gap-14 z-10 ">
        <h1 className="text-white text-4xl lg:text-8xl uppercase font-bold text-center p-8">
          Our Stats
        </h1>
        <p className="text-white text-lg lg:text-4xl text-center text-balance w-[90%]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-around items-center w-full gap-4 z-10 h-full pb-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-white text-4xl lg:text-8xl font-bold">1.534</p>
          <p className="text-white text-lg lg:text-4xl text-center text-balance">
            Active members
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-white text-4xl lg:text-8xl font-bold">99</p>
          <p className="text-white text-lg lg:text-4xl text-center text-balance">
            Yoga Country
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 ">
          <p className="text-white text-4xl lg:text-8xl font-bold">150</p>
          <p className="text-white text-lg lg:text-4xl text-center text-balance">
            Workshop
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStats;
