import React, {useState} from "react";
import Message from "./Message.jsx";
const NewBudget = ({
   budget,
   setBudget,
   setIsValidBudget
}) => {

    const [message, setMessage] = useState('')


    const handleBudget = (e) => {
        e.preventDefault();
        if(!budget || budget < 0){
            //Add message if it does not meet the condition
            setMessage('Budget invalid')
            return
        }
        setMessage('')
        setIsValidBudget(true)

    }
    return(
        <div className="contenedor-presupuesto contenedor sombra">

            <form onSubmit={handleBudget} className="formulario">
                <div className="campo">
                    <label>Define Budget</label>

                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder="Add your new budget"
                        value={budget}
                        onChange={ e => setBudget(Number(e.target.value))} //Number validation
                    />
                </div>

                <input type="submit" value="Add" />
                { message && <Message type="error">{message}</Message> }

            </form>
        </div>
    )
}
export default NewBudget