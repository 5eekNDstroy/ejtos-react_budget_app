import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
        currency({
            type: 'CHG_CURRENCY',
            payload: setNewCurrency,
        });
    };
//  const sethandleCurrencyChange = (event) => {

//     setNewCurrency(event.target.value);
    
//  };
    return (
<div className='alert alert-success' style={{ backgroundColor: 'lightgreen' , borderColor: 'lightgreen' , color: 'white' }} >Currency (
<select style={{ backgroundColor: 'lightgreen' , borderColor: 'lightgreen' , color: 'white' }} value={newCurrency} onChange={handleCurrencyChange}>
<option value="$"> $ Dollar </option>
<option value="£"> £ Pound </option>
<option value="€"> € Euro </option>
<option value="₹"> ₹ Ruppee </option>
</select>
)
</div>

    );
};
export default Currency;