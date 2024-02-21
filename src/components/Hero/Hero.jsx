import Header from "../Header/Header";

export default function Hero(){
    return (
            <div className="hero flex justify-between w-full">	
                <section className="Left-h basis-3/4"> 
                <Header/>
                </section>
                <section className="right-h basis-1/4"> right side</section>
            </div>
    );
}