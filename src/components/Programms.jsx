import SingleProgram from "./singleProgram";
export default function Programs() {
  const program = [
    { time: 3, amount: 1200 },
    { time: 6, amount: 2000 },
    { time: 12, amount: 3500 },
  ];
  return (
    <section className="mt-7 p-5 flex flex-col gap-4">
      {program.map((single) => (
        <SingleProgram
          key={single.amount}
          time={single.time}
          amount={single.amount}
        />
      ))}
    </section>
  );
}
