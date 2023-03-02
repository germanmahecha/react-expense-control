import React from "react";
import { useState, useEffect } from 'react'

const BudgetControl = ({spends, budget }) => {

    const [available, SetAvailable] = useState(0)
    const [spent, SetSpent] = useState(0)

    useEffect(()=>{
        const totalSpent = spends.reduce((total, spend) => spend.amount + total, 0);
        const totalAvailable = budget - totalSpent

        SetAvailable(totalAvailable)
        SetSpent(totalSpent)
    },[spends])

    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }
    return(
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type="button"
                    //onClick={handleResetApp}
                >
                    Reset App
                </button>
                <p>
                    <span>Budget: </span>{formatAmount(budget)}
                </p>

                <p>
                    <span>Available: </span>{formatAmount(available)}
                </p>

                <p>
                    <span>Spent: </span>{formatAmount(spent)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl