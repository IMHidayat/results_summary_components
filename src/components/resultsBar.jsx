export default function ResultBar(p) {
  return (
    <div className="result-bar-wrapper">
      <div className={`result-bar flex p-3 mb-5 md:mb-3 ${p.c} ${p.c3} `}>
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
    </div>
  );
}
