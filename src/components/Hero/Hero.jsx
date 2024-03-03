import Header from "../Header/Header";
import Heart from "../../assets/heart.png"

export default function Hero() {
  return (
    <div className="hero flex justify-between w-full">
      {/* left-side */}
      <section className="Left-h basis-3/4 pb-8 px-10">
        <Header />

        <div className="the-best-add  w-fit bg-[#363d42] mt-20 py-4 px-7 rounded-full text-white uppercase text-md tracking-wider relative flex items-center justify-start ">
          <div className="absolute bg-orange-600 w-[5.4rem] h-[80%] left-[8px] rounded-full z-0"></div>
          <span className="z-10">the best fitness club in town</span>
        </div>

        {/* Hero Heading */}
        <div className="flex flex-col gap-1 uppercase text-[4.5rem] font-bold text-white">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span> Ideal body</span>
          </div>
          <span className="text-[1rem] font-extralight normal-case tracking-wide width-[80%]">
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </span>
        </div>

        {/* figure */}
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-white text-[2rem]">+75</span>
            <span className="text-[--gray] uppercase">expert coachs</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[2rem]">+770</span>
            <span className="text-[--gray] uppercase">members joined</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-[2rem]">+30</span>
            <span className="text-[--gray] uppercase">fitness programs</span>
          </div>
        </div>
        <button className="bg-[--orange] text-white btn">
          Get Started
        </button>
      </section>
      {/* right side */}
      <section className="right-h basis-1/4 relative bg-orange-600">
        <button className="btn bg-white absolute right-[50px] top-5">Join Now</button>
        <div className="bg-[--darkgray] width-fit">
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span> 116 bpm</span>
        </div>
      </section>
    </div>
  );
}
