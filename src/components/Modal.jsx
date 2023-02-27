import closeBtn from './../img/cerrar.svg'
import {useState} from "react";
import Message from "./Message.jsx";
const Modal = ({setModal, modalAnimation, setModalAnimation, saveSpend}) => {

    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')

    const closeModal = () => {
        setModalAnimation(false)

        setTimeout(() => {
            setModal(false)
        }, 300);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validation all fields
        if([name, amount, category].includes('')){
           setMessage('All fields are required')
            setTimeout(()=>{
                setMessage('')
            },3000)
           return
        }
        saveSpend({name, amount, category})
    }


    return(
        <div className="modal">
            <div className="cerrar-modal">
                <img
                    src={closeBtn}
                    alt="icon close modal"
                    onClick={closeModal}
                />
            </div>


            <form
                onSubmit={handleSubmit}
                className={ `formulario ${ modalAnimation ? 'animar' : 'cerrar'}` }
            >
                <legend>New Spend</legend>

                {message && <Message type={'error'}>{message} </Message>}

                <div className="campo">
                    <label htmlFor="nombre">Spend Name</label>

                    <input
                        id="nombre"
                        type="text"
                        placeholder="Add Spend Item"
                        value={name}
                        onChange={ e => setName(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad">Cantidad</label>

                    <input
                        id="cantidad"
                        type="number"
                        placeholder="Add the amount of the expense: ej. 300"
                        value={amount}
                        onChange={ e => setAmount(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>

                    <select
                        id="categoria"
                        value={category}
                        onChange={ e => setCategory(e.target.value)}

                    >
                        <option value="">-- Select one --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="various">Various Expenses</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>

                <input
                    type="submit"
                    //value={gastoEditar.nombre ? 'Save changes' : 'Add Spend'}
                />


            </form>
        </div>
    )
}

export default Modal