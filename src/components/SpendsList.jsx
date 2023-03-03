import React from "react";
import Spend from "./Spend";

const SpendsList = ({spends, setSpendEdit}) => {
    return(
        <div className="listado-gastos contenedor">
            <h2>{SpendsList.length ? 'Spends' : "No spends"}</h2>

            {
                spends.map ( spend => (
                    <Spend 
                        key={spend.id}
                        spend={spend}
                        setSpendEdit={setSpendEdit}/>
                ))
            }
        </div>
    )
}

export default SpendsList