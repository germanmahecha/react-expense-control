import React from "react";
import BudgetControl from "./BudgetControl.jsx";
import NewBudget from "./NewBudget.jsx";

const Header = ({
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
                    budget={budget}
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