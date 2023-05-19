import "../sass/home.scss";
import iconReaction from "../assets/icon-reaction.svg";

// COMPONENTS
import ResultBar from "../components/resultsBar_Home";

export default function Home() {
  return (
    <main>
      <div className="container-fluid">
        <div className="row">
          <section className="col-12 text-center rounded-bottom-5">
            <h5 className="my-4 fw-semibold text-1">Your Result</h5>
            <div className="rounded-circle ">
              <h1 className="mb-1 text-white">76</h1>
              <span className="text-white-50">Of 100</span>
            </div>
            <h2 className="mt-4 text-white">Great</h2>
            <p className="mx-auto text-1 ">You scored higher than 65% of the people who have taken these tests.</p>
          </section>
          <section className="col-12 d-flex flex-column">
            <h5 className="mb-4 fw-bold">Summary</h5>
            <div className="d-flex p-3 mb-4 fw-bold align-content-center rounded ">
              <img className="me-3" src={iconReaction} alt="Icon" />
              <span>Reaction</span>
              <span className="ms-auto">80/100</span>
            </div>

            <ResultBar img={iconReaction} />

            <button className="btn btn-primary rounded-pill p-3 fs-5">Continue</button>
          </section>
        </div>
      </div>
    </main>
  );
}
