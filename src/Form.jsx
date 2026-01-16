import "./Form.css"

function Form () {
  return(
    <div className="form">
        <div className="heading">
            <h3>Morgage Calculator</h3>
            <p><a href="#">Clear All</a></p>
        </div>
        <form>
            <label className="label">Morgage Amount</label>
            <input type="number" min="0" placeholder="morgage amount" required className="morgage-input"/>
            <div className="morgage-div">
                <div>
                    <label className="label">Morgage Term</label>
                    <div className="number-div">
                        <input type="number" min="0" placeholder="morgage term" required/>
                    </div>
                </div>
                <div>
                    <label>Interest Rate</label>
                    <div>
                        <input type="number" min="0" placeholder="interest rate" required/>
                    </div>
                </div>
            </div>
            <div>
                <label>Morgage Type</label>
                <div className="radio-div">
                    <input type="radio" name="morgagetype" value="Repayment" />
                    <label>Repayment</label>
                </div>
                <div className="radio-div">
                    <input type="radio" name="morgagetype" value="interest" />
                    <label>Interest Only</label>
                </div>
            </div>
                <button>Calculate Repayments</button>
        </form>
    </div>
  )
}

export default Form