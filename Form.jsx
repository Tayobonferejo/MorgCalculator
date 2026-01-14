function Form () {
  return(
    <>  <div>
            <h1>Morgage Calculator</h1>
            <p><a href="#">Clear All</a></p>
        </div>
        <form>
            <label>Morgage Amount</label>
            <input type="number" placeholder="morgage amount" required/>
            <div>
                <div>
                    <label>Morgage Term</label>
                    <div>
                        <input type="number" placeholder="morgage term" required/>
                    </div>
                </div>
                <div>
                    <label>Interest Rate</label>
                    <div>
                        <input type="number" placeholder="interest rate" required/>
                    </div>
                </div>
                <div>
                    <label>Morgage Type</label>
                    <div>
                        <input type="radio" name="morgagetype" value="Repayment" />
                        <label>Repayment</label>
                    </div>
                    <div>
                        <input type="radio" name="morgagetype" value="interest" />
                        <label>Repayment</label>
                    </div>
                </div>
                <button>Calculate Repayments</button>
            </div>
        </form>
    </>
  )
}

export default Form