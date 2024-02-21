export default function Header(){
    return (
            <div className="header flex justify-between text-white ">	
                <p className=" text-3xl mt-[-20px]">Men<span className="text-[#f48915]">'</span>s Club<span className="text-[#f48915]  text-7xl leading-none">.</span> </p>
                <ul className="menu flex gap-2 flex-shrink-0 p-6">
                    <li>Home</li>
                    <li>Programs</li>
                    <li>Why us</li>
                    <li>Plans</li>
                    <li>Testimonials</li>
                </ul>
            </div>
    );
}