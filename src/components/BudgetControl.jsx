import React from "react";
import { useState, useEffect } from 'react'

const BudgetControl = ({budget}) => {

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
                    <span>Available: </span>{formatAmount(0)}
                </p>

                <p>
                    <span>Spent: </span>{formatAmount(0)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl