import experienceImg from "../assets/image_new_experience.jpg";
import lotusImg from "../assets/lotus_section_5.png";

const NewExperience = () => {
  return (
    <div className="relative bg-[#F1F1F1] grid  grid-cols-1 lg:grid-cols-2  h-screen justify-center  items-center lg:justify-items-center gap-8  overflow-clip -z-20 py-4">
      <img
        className="absolute  -bottom-1/4 right-0 -z-10"
        src={lotusImg}
        alt=""
      />
      <div className="lg:order-last flex flex-col flex-wrap justify-center items-center gap-8   h-full  lg:px-20 xl:px-80 ">
        <h2 className=" lg:text-6xl text-4xl  font-bold text-[#473E59] uppercase text-center self-center lg:text-start lg:self-start  ">
          New <br />
          Experience
        </h2>
        <p className="text-xl tracking-wide text-[#473E59]  text-center  text-balance lg:text-start self-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum
        </p>
        <button className="bg-[#473E59] text-white uppercase text-lg font-semibold px-12 py-2 rounded-sm self-center lg:self-start z-30">
          Read More
        </button>
      </div>
      <img className="p-8 justify-self-center" src={experienceImg} />
    </div>
  );
};

export default NewExperience;
