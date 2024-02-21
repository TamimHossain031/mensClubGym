import Header from "../Header/Header";

export default function Hero(){
    return (
            <div className="hero flex justify-between w-full">	
            {/* left-side */}
                <section className="Left-h basis-3/4"> 
            
                <Header/>

                <div className="the-best-add  w-fit bg-[#363d42] mt-20 py-4 px-7 rounded-full text-white uppercase text-md tracking-wider relative flex items-center justify-start ">
                    <div className="absolute bg-orange-700 w-[5.4rem] h-[80%] left-[8px] rounded-full z-0"></div>
                    <span className="z-10">the best fitness club in town</span>
                </div>
                </section>
                <section className="right-h basis-1/4"> right side</section>
            </div>
    );
}