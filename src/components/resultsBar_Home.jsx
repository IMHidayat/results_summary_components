export default function ResultBar(p) {
  return (
    <div className="d-flex p-3 mb-4 fw-bold align-content-center rounded ">
      <img className="me-3" src={p.img} alt="Icon" />
      <span>Reaction</span>
      <span className="ms-auto">80/100</span>
    </div>
  );
}
