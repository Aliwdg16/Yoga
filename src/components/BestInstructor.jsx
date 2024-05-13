import instructorImg from "../assets/image_best_instructur.jpg";
import lotusImg from "../assets/lotus_section_4.png";

const BestInstructor = () => {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2   h-screen justify-center items-center lg:justify-items-center gap-8 overflow-clip py-4">
      <img
        className="absolute -z-20 -bottom-1/4 left-0"
        src={lotusImg}
        alt=""
      />
      <div className="flex flex-col flex-wrap justify-center items-start gap-8    h-full lg:justify-self-start lg:px-20 xl:px-80 ">
        <h2 className=" lg:text-6xl text-4xl  font-bold text-[#473E59] uppercase text-center self-center lg:text-start lg:self-start  ">
          Best <br />
          Instructor
        </h2>
        <p className="text-xl tracking-wide text-[#473E59]  text-center  text-balance lg:text-start self-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum
        </p>
        <button className="bg-[#473E59] text-white uppercase text-lg font-semibold px-12 py-2 rounded-sm self-center lg:self-start">
          Read More
        </button>
      </div>
      <img className="p-8 justify-self-center " src={instructorImg} />
    </div>
  );
};

export default BestInstructor;
