import React from "react";
import Spend from "./Spend";

const SpendsList = ({spends}) => {
    return(
        <div className="listado-gastos contenedor">
            <h2>{SpendsList.length ? 'Spends' : "No spends"}</h2>

            {
                spends.map ( spend => (
                    <Spend 
                        key={spend.id}
                        spend={spend}/>
                ))
            }
        </div>
    )
}

export default SpendsList