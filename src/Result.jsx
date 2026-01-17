import empty from "./assets/images/illustration-empty.svg"
import "./Result.css"

function Result (){
    return(
        <div className="result-div">
            <img src={empty}></img>
            <h2>Results Shown here</h2>
            <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
        </div>
    )
}

export default Result