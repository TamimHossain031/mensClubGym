export default function SingleProgram({time,amount}){
    return (
            <div className="text-white p-6 hover:bg-sky-500 bg-[#111111] xl:min-w-[300px]">	
                 <h1 className="text-center text-xl">{time} Month Unlimited</h1>
                 <h2 className="text-center text-md">{amount} Taka Only</h2>

                 <ul className="list-disc pl-8">
                    <li>Unlimited tools</li>
                    <li>Experienced Trainer </li>
                    <li>Weight loss classes</li>
                    <li>There is no time limit</li>
                    <li>Free Wifi</li>
                    
                 </ul>
            </div>
    );
}