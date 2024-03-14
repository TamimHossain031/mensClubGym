import Calories from "../../assets/calories.png";
import Heart from "../../assets/heart.png";
import HeroImg from "../../assets/hero_image.png";
import Header from "../Header/Header";
export default function Hero() {
  return (
    <div className="hero flex flex-col w-dvw min-h-dvh ">
      {/* left-side */}
      <section className="Left-h w-dvw pb-[2%] px-[4%] relative text-center">
        <Header />

        <div className="the-best-add w-fit bg-[#363d42] mx-auto  mt-10 py-2 px-7 rounded-full text-white uppercase text-[10px] tracking-wider relative flex items-center justify-start">
          <div className="absolute bg-orange-600 w-[3rem] h-[80%] left-[8px] rounded-full z-0"></div>
          <span className="z-10">the best fitness club in town</span>
        </div>

        {/* Hero Heading */}
        <div className="flex flex-col mt-2 gap-1 uppercase text-[1.5rem] font-bold text-white z-10 tracking-[0.3rem]">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span> Ideal body</span>
          </div>
          <span className="text-[0.6rem] font-extralight normal-case tracking-wide width-[80%]">
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </span>
        </div>

        {/* figure */}
        <div className="flex gap-3 figure justify-center mt-5">
          <div>
            <span>+75</span>
            <span>
              expert <br></br> coachs
            </span>
          </div>
          <div>
            <span>+770</span>
            <span>
              members<br></br> joined
            </span>
          </div>
          <div>
            <span>+30</span>
            <span>
              fitness<br></br> programs
            </span>
          </div>
        </div>

        {/* <img src={HeroBack} alt="" className="absolute right-1 top-11 z-9" />
        <img
          src={HeroImg}
          alt=""
          className="absolute right-[-100px] top-[50%] w-52 z-10"
        /> */}
      </section>
      {/* right side */}
      <section className="right-h basis-1/4 relative bg">
        <button className="btn bg-white absolute right-[50px] top-5">
          Join Now
        </button>

        <div className="mx-10 mt-5">
          <button className="bg-[--orange] text-white btn">Get Started</button>
          <div className="bg-[--caloryCard] flex w-fit p-2 gap-2 mt-5">
            <img src={Calories} alt="" width={40} />
            <div className="flex flex-col">
              <span className="text-[--gray]">Calories burned</span>
              <span className="text-white">220 kcal</span>
            </div>
          </div>
        </div>
        <div className="relative w-full flex justify-center my-[4rem]">
          <img  className=" "  src={HeroImg} alt="" width={120} />
          <div className="bg-[--darkgray] w-fit flex flex-col p-2 items-start absolute top-[1rem] right-[1rem] rounded-lg">
            <img src={Heart} alt="" width={30} />
            <span className="text-[--gray]">Heart Rate</span>
            <span className="text-white"> 116 bpm</span>
          </div>
        </div>
      </section>
    </div>
  );
}
