import React from "react";
import BudgetControl from "./BudgetControl.jsx";
import NewBudget from "./NewBudget.jsx";

const Header = ({
    spends,
    setSpends,
    budget,
    setBudget,
    isValidBudget,
    setIsValidBudget
}) => {
    return(
        <header>
            <h1>Expense Planner</h1>
            {isValidBudget ? (
                <BudgetControl
                    spends={spends}
                    setSpends={setSpends}
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}
        </header>
    )
}

export default Header