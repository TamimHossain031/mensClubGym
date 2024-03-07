import menuBar from '../../assets/bars.png'
export default function Header(){
    return (
            <div className="header flex justify-between text-white py-3">	
                <p className=" text-[16px] ">Men<span className="text-[#f48915]">'</span>s Club<span className="text-[#f48915]  text-xl leading-none">.</span> </p>
                <ul className=" hidden menu gap-2 flex-shrink-0 p-6 ">
                    <li>Home</li>
                    <li>Programs</li>
                    <li>Why us</li>
                    <li>Plans</li>
                    <li>Testimonials</li>
                </ul>
                <div className="bg-[#363d42] flex w-8 items-center p-2">
                    <img src={menuBar} alt="" width={25} />
                </div>
            </div>
    );
}