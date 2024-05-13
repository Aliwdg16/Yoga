const Leonawoods = () => {
  return (
    <div className=" relative overflow-hidden flex flex-col justify-start w-full min-h-[400px] bg-[url('./src/assets/lotus_section_7.png')] bg-no-repeat bg-contain bg-right-bottom bg-transparent bg-[#40384f]">
      {/* <div className=" absolute bg-[url('./src/assets/background_section_7.png')] z-0  bottom-0 right-0 "></div> */}
      <img
        src="./src/assets/background_section_7.png"
        alt="dd"
        className=" absolute -bottom-12 right-0 sm:right-20  md:right-32  z-0 w-96 "
      />
      <div className="absolute bg-[#41374f] opacity-80 inset-0 z-10 "></div>
      <div className="  mr-15 lg:ml-96 z-20 ">
        <p className="text-white text-2xl mt-10 m-2 ">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit. Vivamus
          <br /> lacinia odio vitae vestibulum
          <br /> vestibulum.
        </p>
        <h3 className="text-white mt-5 mb-32 font-bold text-2xl">
          - LEONA WOODS
        </h3>
      </div>
    </div>
  );
};

export default Leonawoods;

// background_section_7.png
// style={{backgroundImage:'url("./src/assets/background_section_7.png")', backgroundImage:'url("./src/assets/lotus_section_7.png")', backgroundRepeat:"no-repeat", backgroundSize:"contain",backgroundPosition:'top right' , backgroundColor:'#3d3449'   }}
