export default function Footer() {
  return (
    <section className="flex justify-between px-4 py-4 xl:px-[30px]">
      <div className="text-white">
        <h1 className="text-sky-500 text-md">
          {" "}
          Men<span className="text-white">'</span>s Club{" "}
          <span className="text-[30px] text-white">.</span>
        </h1>

        <p className="text-white text-xs">Akmal Ali Road</p>
        <p className="text-white text-xs">Epz,Chattogram</p>
      </div>
      <div className="text-white text-xs">
        <h1>Contact</h1>
        <p>Phone :</p>
        <p>01677524484</p>
        <p>Email:</p>
        <p>mdmipukc@gmail.com</p>
      </div>
    </section>
  );
}
