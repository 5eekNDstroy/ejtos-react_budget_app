import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    if(alertType === "alert-danger") {
        alert("You cannot reduce the budget value lower than the spending");
        return;
    }
    else{
        return (
            <div className={`alert ${alertType}`}>
                <span>Remaining: { currency } {budget - totalExpenses}</span>
            </div>
        );
    }

};
export default Remaining;
