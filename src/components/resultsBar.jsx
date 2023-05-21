export default function ResultBar(p) {
  return (
    <div className={`result-bar flex p-3 md:p-2 mb-5 md:mb-3 ${p.c} ${p.c3} `}>
      {/* <span className="borderz">
        <span className="ss"></span>
        <span className="se"></span>
        <span className="es"></span>
        <span className="ee"></span>
      </span> */}
      <span className="border-top"></span>
      <span className="border-bottom"></span>
      <div className="flex">
        <img className="me-3 md:mx-2" src={p.img} alt="Icon" />
        <span className={`text-xl md:text-base ${p.c2}`}>{p.name}</span>
      </div>
      <p className="text-xl md:text-base">
        <span className="mx-2">{p.val}</span>
        <span className="text-gray-400">
          /<span className="mx-1">100</span>
        </span>
      </p>
    </div>
  );
}
