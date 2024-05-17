
const Error = (ref) =>{
  return (
    <>
      <div className="w-[170px] h-[100px] bg-white flex justify-center items-center text-red-400 rounded-lg fixed top-0 left-1/4" ref={ref}>
        <h1>Please Select image !</h1>
      </div>
    </>
  );
};
export default Error;