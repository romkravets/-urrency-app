import React from 'react'

export default function CurrencyRow(props) {

   const {
      currencyOptions,
      selectedtCurrency,
      onChangeCurrency,
      amount,
      onChangeAmount,
   } = props
   return (
      <div>
          <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
          <select value={selectedtCurrency} onChange={onChangeCurrency}>
               {currencyOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
               ))}
          </select>
      </div>
   )
}
