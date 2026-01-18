import "./Form.css"
import { useState } from "react";

function Form () {

    const [mortgageAmount, setMortgageAmount] = useState("");
    const [term, setTerm] = useState("");
    const [rate, setRate] = useState("");
    const [mortgageType, setMortgageType] = useState("");

  return(
    <div className="form">
        <div className="heading">
            <h3>Morgage Calculator</h3>
            <p><a href="#"
                onClick={() => {
                setMortgageAmount("");
                setTerm("");
                setRate("");
                setMortgageType("");
            }}
            >Clear All</a></p>
        </div>
        <form 
                onSubmit={(e) => {
                e.preventDefault();
                console.log({
                mortgageAmount,
                term,
                rate,
                mortgageType,
                });
            }}
        >
            <label className="label">Morgage Amount</label>
            <input type="number" min="0" placeholder="morgage amount" required
                value={mortgageAmount}
                onChange={(e) => setMortgageAmount(e.target.value)}
                className="morgage-input"/>
            <div className="morgage-div">
                <div>
                    <label className="label">Morgage Term</label>
                    <div className="number-div">
                        <input type="number" min="0" placeholder="term" required 
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            className="morgage-unit"/>
                    </div>
                </div>
                <div>
                    <label>Interest Rate</label>
                    <div>
                        <input type="number" min="0" placeholder="rate" required 
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}className="morgage-unit"/>
                    </div>
                </div>
            </div>
            <div>
                <label>Morgage Type</label>
                <div className="radio-div">
                    <input type="radio" name="morgagetype" 
                        value="repayment"
                        checked={mortgageType === "repayment"}
                        onChange={(e) => setMortgageType(e.target.value)}
                    />
                    <label>Repayment</label>
                </div>
                <div className="radio-div">
                    <input type="radio" name="morgagetype" 
                        value="interest"
                        checked={mortgageType === "interest"}
                        onChange={(e) => setMortgageType(e.target.value)}
                    />
                    <label>Interest Only</label>
                </div>
            </div>
                <button>Calculate Repayments</button>
        </form>
    </div>
  )
}

export default Form