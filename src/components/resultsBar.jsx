export default function ResultBar(p) {
  return (
    <div className={"flex p-4 md:p-2 mb-4  items-center font-bold rounded " + p.bgColor}>
      <img className="w-[25px] md:w-[17px]  mx-2" src={p.img} alt="Icon" />
      <span className={p.color + " text-xl md:text-base"}>{p.name}</span>
      <p className="ms-auto text-xl md:text-base">
        <span className="mx-2">{p.val}</span>
        <span className="text-gray-400">
          /<span className="mx-1">100</span>
        </span>
      </p>
    </div>
  );
}
