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
      <p>Your results are shown below based on the information to provided. To adjust the results, edit the form and click "calculate repayment" again </p>

      <div className="result-card">
        <p>Your monthly repayment</p>
        <div>
          <p>Your monthly repayments</p>
          <h1>₦{monthlyPayment}</h1>
          <p>Total you'll reply over the term</p>
          <p></p>
        </div>
      </div>
    </div>
  );

}

export default Result