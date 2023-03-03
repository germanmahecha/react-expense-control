import { useState, useEffect } from 'react'
import Header from "./components/Header.jsx";
import {IdGenerator} from "./helpers/index.js";
import IconNewSpend from './img/nuevo-gasto.svg'
import Modal from "./components/Modal.jsx";
import SpendsList from './components/SpendsList.jsx';
function App() {
  const [spends, setSpends] = useState([])
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalAnimation, setModalAnimation] = useState(false)
  const [spendEdit, setSpendEdit] = useState({})


  useEffect(()=>{
    if( Object.keys(spendEdit).length > 0){
      setModal(true)

      setTimeout(()=>{
          setModalAnimation(true)
      },500)
    }
  },[spendEdit])


  const handleNewSpend = () => {
      setModal(true)

      setTimeout(()=>{
          setModalAnimation(true)
      },500)
  }
  const saveSpend = spend => {
    spend.id = IdGenerator();
    spend.dateS = Date.now();
    setSpends([...spends, spend])
      //Close modal
      setModalAnimation(false)
      setTimeout(() => {
          setModal(false)
      }, 300);
  }

  


  return (
    <div className={ modal ? 'fijar' : ''}>
      <Header
          spends={spends}
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
      />
        { isValidBudget && (
            <>
                <main>
                  <SpendsList spends={spends} setSpendEdit={setSpendEdit}/>
                </main>
                <div className="nuevo-gasto">
                    <img
                        src={IconNewSpend}
                        alt="icon new spend"
                        onClick={handleNewSpend}
                    />
                </div>
            </>
        )}
        { modal && <Modal
                    setModal={setModal}
                    modalAnimation={modalAnimation}
                    setModalAnimation={setModalAnimation}
                    saveSpend={saveSpend}
                    spendEdit={spendEdit}
                    /> }

    </div>
  )
}

export default App
