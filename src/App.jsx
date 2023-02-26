import { useState } from 'react'
import Header from "./components/Header.jsx";
import IconNewSpend from './img/nuevo-gasto.svg'
import Modal from "./components/Modal.jsx";
function App() {

  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalAnimation, setModalAnimation] = useState(false)

    const handleNewSpend = () => {
        setModal(true)

        setTimeout(()=>{
            setModalAnimation(true)
        },300)
    }

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
                    onClick={handleNewSpend}
                />
            </div>
        )}
        { modal && <Modal setModal={setModal} modalAnimation={modalAnimation} setModalAnimation={setModalAnimation}/> }

    </div>
  )
}

export default App
