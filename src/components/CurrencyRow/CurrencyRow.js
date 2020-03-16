import React from 'react'

export default function CurrencyRow(props) {

   const {
      currencyOptions,
      selectedtCurrency,
      onChangeCurrency,
   } = props
   return (
      <div>
          <input type="number"/>
          <select value={selectedtCurrency} onChange={onChangeCurrency}>
               {currencyOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
               ))}
          </select>
      </div>
   )
}
