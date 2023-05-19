export default function ResultBar(p) {
  return (
    <div className={"d-flex p-3 mb-4 font-bold align-content-center rounded " + p.bgColor}>
      <img className="me-3" src={p.img} alt="Icon" />
      <span className={p.color}>{p.name}</span>
      <p className="ms-auto">
        <span className="mx-2">{p.val}</span>
        <span className="text-gray-400">
          /<span className="mx-1">100</span>
        </span>
      </p>
    </div>
  );
}
