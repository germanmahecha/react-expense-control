import React from "react";
import { useState, useEffect } from 'react'
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const BudgetControl = ({
   spends,
   setSpends,
   budget,
   setBudget,
   setIsValidBudget
}) => {

    const [available, SetAvailable] = useState(0)
    const [spent, SetSpent] = useState(0)
    const [percentage, SetPercentage] = useState(0)

    useEffect(()=>{
        const totalSpent = spends.reduce((total, spend) => spend.amount + total, 0);
        const totalAvailable = budget - totalSpent

        //Calculate percentage
        const totalPercentage = (( (budget - totalAvailable ) / budget ) * 100).toFixed(2);
        console.log(totalPercentage)


        SetAvailable(totalAvailable)
        SetSpent(totalSpent)
        setTimeout(()=>{
            SetPercentage(totalPercentage);
        }, 1500)
    },[spends, percentage])

    const formatAmount = (amount) => {
        return amount.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const result = confirm("Do you want to reset the budget and expenses?")

        if(result){
            setSpends([])
            setBudget(0)
            setIsValidBudget(false)
        }
    }

    return(
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    styles={
                        buildStyles({
                        pathColor: percentage > 100 ? '#DC2626' : '#3B82f6',
                        trailColor: '#F5F5F5',
                        textColor: percentage > 100 ? '#DC2626' : '#3B82f6',
                    })}
                    value={percentage}
                    text={`${percentage}% Spent`}
                />

            </div>
            <div className="contenido-presupuesto">
                <button
                    className="reset-app"
                    type="button"
                    onClick={handleResetApp}
                >
                    Reset App
                </button>
                <p>
                    <span>Budget: </span>{formatAmount(budget)}
                </p>

                <p className={`${available < 0 ? 'negativo' : ''}`}>
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