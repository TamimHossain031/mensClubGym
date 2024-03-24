
import { RiMenuLine } from "react-icons/ri";
export default function Hero(){
    return (
            <section className="w-dvw h-dvh">	
                {/* navigation */}
                <nav className="px-10 py-5 flex justify-between">
                    <div className="text-sky-500 text-xl"> Men<span className="text-white">'</span>s Club <span className="text-[30px] text-white">.</span></div>
                    <ul className="sm:flex gap-2 text-white hidden">
                        <li><a href="http://">Home</a></li>
                        <li><a href="http://">Members</a></li>
                        <li><button className="bg-sky-500 text-white py-2 px-3 mt-[-7px] rounded-md">Join with us</button></li>
                    </ul>
                    <div className="text-white text-xl">
                       <RiMenuLine/>
                    </div>
                </nav>
                <div className="hero-background w-full h-[500px] text-white flex flex-col justify-center text-center gap-2 px-5">
                    <h1 className="text-5xl">BE Fit</h1>
                    <h1 className="text-4xl">Be STRONGER</h1>
                    <p>Unleash your potential at our cutting -edge gym <br></br>Elevate your fitness journey</p>
                    <button className="bg-sky-500 py-2 px-3 rounded-md uppercase">join With Us</button>
                </div>
            </section>
    );
}