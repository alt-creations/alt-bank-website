import { robot } from "../assets/images";
import GetStarted from "./GetStarted";

const Intro = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col py-6`}>
      <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
           New <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100.8px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex flex justify-center items-center md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[75%] h-[75%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden flex justify-center items-center`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Intro;
