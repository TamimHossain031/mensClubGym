export default function Input({type, label, register, required ,errors}) {
   
    
  return (
    <>
      <label className='capitalize'>{label} :</label>
      <input className={`border bg-transparent rounded p-1 text-white ${errors && 'border-red-400 border-l-4'}`} type={type} {...register(label, { required })} />
    </>
  );
}
