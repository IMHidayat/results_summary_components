export default function ResultBar(p) {
  return (
    <div className={"result-bar flex p-3 px-4 md:p-2 mb-4 md:mb-2 items-center font-semibold rounded " + p.bgColor}>
      <img className="me-3 md:mx-2" src={p.img} alt="Icon" />
      <span className={"text-xl md:text-base " + p.color}>{p.name}</span>
      <p className="ms-auto text-xl md:text-base">
        <span className="mx-2">{p.val}</span>
        <span className="text-gray-400">
          /<span className="mx-1">100</span>
        </span>
      </p>
    </div>
  );
}
