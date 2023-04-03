import { useState, useEffect } from 'react'
import Header from "./components/Header.jsx";
import {IdGenerator} from "./helpers/index.js";
import IconNewSpend from './img/nuevo-gasto.svg'
import Modal from "./components/Modal.jsx";
import SpendsList from './components/SpendsList.jsx';
function App() {
  const [spends, setSpends] = useState([])
  const [budget, setBudget] = useState(
      Number(localStorage.getItem('budget')) ?? 0
      )
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [modalAnimation, setModalAnimation] = useState(false)
  const [editSpend, setEditSpend] = useState({})


  useEffect(()=>{
    if( Object.keys(editSpend).length > 0){
      setModal(true)

      setTimeout(()=>{
          setModalAnimation(true)
      },500)
    }
  },[editSpend])


    useEffect(()=>{
        localStorage.setItem('Budget', budget ?? 0)
    }, [budget])

    useEffect(()=>{
        const budgetLS = Number(localStorage.getItem('Budget')) ?? 0
        if(budgetLS > 0){
            setIsValidBudget(true)
        }
    }, [])


    useEffect(()=>{
        localStorage.setItem('Spends', JSON.stringify(spends) ?? [])
    }, [spends])

    useEffect(()=>{
        localStorage.getItem('Spends') ? JSON.parse(localStorage.getItem('Spends')) : []
    }, [])



  const handleNewSpend = () => {
      setModal(true)

      setTimeout(()=>{
          setModalAnimation(true)
      },500)
  }
  const saveSpend = spend => {
      console.log(spend)
     if(spend.id){
         //Update
         const spendsUpdated = spends.map( spendState => spendState.id === spend.id ? spend : spendState)
         setSpends(spendsUpdated)
         setEditSpend({})
     }else{
         spend.id = IdGenerator();
         spend.dateS = Date.now();
         setSpends([...spends, spend])
     }

      //Close modal
      setModalAnimation(false)
      setTimeout(() => {
          setModal(false)
      }, 500);
  }

  const deleteSpend = id => {
      console.log(`eliminando`, id)
      const spendsUpdated = spends.filter( spend => spend.id !== id );
      setSpends(spendsUpdated)
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
                  <SpendsList
                      spends={spends}
                      setEditSpend={setEditSpend}
                      deleteSpend={deleteSpend}
                  />
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
                    editSpend={editSpend}
                    setEditSpend={setEditSpend}
                    /> }

    </div>
  )
}

export default App

