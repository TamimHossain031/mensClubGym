import { useParams } from 'react-router-dom';
const Error = () =>{
  const {error}=useParams();
  let text ;
  switch(error){
    case 'disconnect':
      text = 'Please Reconnect with your internet'
  }
  return (
    <div className='min-h-[100dvh]'>
      <div className="w-[170px] h-[100px] bg-white flex justify-center items-center text-red-400 rounded-lg fixed top-[50%] left-[30%] text-center">
        {text}
      </div>
    </div>
  );
};
export default Error;