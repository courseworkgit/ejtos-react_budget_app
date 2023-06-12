import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencySelect = () => {
    const { currency } = useContext(AppContext);
    const { currencyName } = useContext(AppContext);
    const { dispatch  } = useContext(AppContext);
    const setCurrency = (value) => {
        dispatch ({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    }
    return (
        <div  className='alert alert-secondary currency-green currency-white'>
            <span>Currency: ({currency} {currencyName})</span>
            <select  className="custom-select currency-green" id="currencySelect"
            onChange={(event) => setCurrency(event.target.value)}>
                <option value="£" name="pound" >£ Pound</option>                
                <option value="$" name="dollar">$ Dollar</option>
                <option value="€" name="euro" >€ Euro</option>
                <option value="₹" name="ruppee" >₹ Ruppee</option>
                  </select>
        </div>
    );
};
export default CurrencySelect;