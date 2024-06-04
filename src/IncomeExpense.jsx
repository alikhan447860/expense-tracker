import React from 'react'

const IncomeExpense = () => {
  return (
    <div>
       <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+Rupees 0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-Rupees 0.00</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpense
