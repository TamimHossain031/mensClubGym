export default function Login(){


    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
    return (
            <section className='h-[100dvh] text-center text-white flex flex-col'>	
                <h1>Login To Dashboard</h1>
                <form className='flex flex-col w-[300px] text-left m-auto' onSubmit={handleSubmit}>
                    <label htmlFor="email">Email : </label>
                    <input className='bg-transparent border' type="email" id='email' required />
                    <label htmlFor="password">Password : </label>
                    <input className='bg-transparent border' type="password" id='password' required />

                    <button>Login</button>
                </form>
            </section>
    );
}