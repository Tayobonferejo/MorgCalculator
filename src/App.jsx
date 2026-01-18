import { useState } from 'react'
import Form from './Form.jsx'
import Result from './Result.jsx'
import './App.css'

function App() {

  const [monthlyPayment, setMonthlyPayment] = useState(null);
  return (
    <main>
      <Form setMonthlyPayment={setMonthlyPayment} />
      <Result monthlyPayment={monthlyPayment} />
    </main>
  )
}

export default App
