import { useState } from "react";

export default function MorgagePay() {
  const [loanAmt, setLoanAmt] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [term, setTerm] = useState(0);
  const [morgagePay, setmorgagePay] = useState(0);
  const handleChangeAmt = (event) => {
    setLoanAmt(event.target.value);
  };
  const handleChangeInterest = (event) => {
    setInterestRate(event.target.value);
  };
  const handleChangeTerm = (event) => {
    setTerm(event.target.value);
  };
  const handleonSubmit = (e) => {
    e.preventDefault();
    
    const i = interestRate / 12/100; //i
    const P = loanAmt; //P
    const n = term * 12; //n
    const monthPay = (P * i * Math.pow(1 + i, n)) / (Math.pow(1 + 1, n) - 1);
    monthPay.toFixed(2);
    console.log(monthPay,"pppp");
    setmorgagePay(monthPay);
    
  };

  return (
    <form onSubmit={handleonSubmit}>
      <label>Loan Amount</label>
      <input
        id="loan_amt"
        name="loan_amt"
        type="number"
        class="form-control"
        value={loanAmt}
        onChange={handleChangeAmt}
      />
      <br />
      <label>Annual interest rate (%).</label>
      <input
        type="number"
        class="form-control"
        id="interest_rate"
        name="interest_rate"
        value={interestRate}
        onChange={handleChangeInterest}
      />
      <br />
      <label>Loan term (in years)</label>
      <input
        type="number"
        class="form-control"
        id="term"
        name="term"
        onChange={handleChangeTerm}
        value={term}
      />

      <button type="submit" class="btn">
        Calulate
      </button>

      <p>{morgagePay }</p>
    </form>
  );
}
