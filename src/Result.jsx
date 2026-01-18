import empty from "./assets/images/illustration-empty.svg"
import "./Result.css"


function Result ({monthlyPayment}) {

  // EMPTY STATE
  if (!monthlyPayment) {
    return (
      <div className="result-div">
        <img src={empty} alt="empty result" />
        <h2>Results shown here</h2>
        <p>
          Complete the form and click "Calculate Repayments" to see what your
          monthly repayments would be.
        </p>
      </div>
    );
  }

   // RESULT STATE
  return (
    <div className="result-div">
      <h2>Your Results</h2>

      <div className="result-card">
        <p>Your monthly repayment</p>
        <h1>₦{monthlyPayment}</h1>
      </div>
    </div>
  );

}

export default Result