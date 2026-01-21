import { useState } from 'react'
import Form from './Form.jsx'
import Result from './Result.jsx'
import './App.css'

function App() {

  const [monthlyPayment, setMonthlyPayment] = useState(null);

   const showEmptyResult = () => {
    setMonthlyPayment(null); // 🔥 THIS triggers your code
  };

  return (
    <main>
      <Form setMonthlyPayment={setMonthlyPayment} showEmptyResult={showEmptyResult} />
      <Result monthlyPayment={monthlyPayment} />
    </main>
  )
}

export default App
