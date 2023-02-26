import { useState } from 'react'
import Header from "./components/Header.jsx";
import IconNewSpend from './img/nuevo-gasto.svg'
function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)

  return (
    <div>
      <Header
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
      />
        { isValidBudget && (
            <div className="nuevo-gasto">
                <img
                    src={IconNewSpend}
                    alt="icon new spend"
                />
            </div>
        )}

    </div>
  )
}

export default App
