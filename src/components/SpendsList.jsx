import React from "react";
import Spend from "./Spend";

    const SpendsList = ({
        spends,
        setEditSpend,
        deleteSpend,
        filter,
        spendsFilter
    }) => {
    return(
        <div className="listado-gastos contenedor">

            {
                filter ? (
                    <>
                        <h2>{spendsFilter.length ? 'Spends' : "No spends"}</h2>
                        {spendsFilter.map(spend => (
                            <Spend
                                key={spend.id}
                                spend={spend}
                                setEditSpend={setEditSpend}
                                deleteSpend={deleteSpend}
                            />
                        ))}
                    </>
                ):(
                    <>
                        <h2>{spends.length ? 'Spends' : "No spends"}</h2>
                        {spends.map(spend => (
                            <Spend
                                key={spend.id}
                                spend={spend}
                                setEditSpend={setEditSpend}
                                deleteSpend={deleteSpend}
                            />
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default SpendsList