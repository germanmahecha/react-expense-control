import React from "react";
import { formatDate } from "../helpers";
import IconSaves from '../img/icono_ahorro.svg'
import IconHome from '../img/icono_casa.svg'
import IconFood from '../img/icono_comida.svg'
import IconExpenses from '../img/icono_gastos.svg'
import IconLeisure from '../img/icono_ocio.svg'
import IconHealth from '../img/icono_salud.svg'
import IconSubscriptions from '../img/icono_suscripciones.svg'


const dictionaryIcons = {
    saves : IconSaves, 
    home : IconHome, 
    food : IconFood, 
    various : IconExpenses, 
    leisure : IconLeisure, 
    health : IconHealth, 
    subscriptions : IconSubscriptions
}

const Spend = ({spend}) => {

    const {category, name, amount, dateS, id}= spend
    return(
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img 
                    src={dictionaryIcons[category]}
                    alt="spend icon"
                />
                <div className="descripcion-gasto">
                    <p className="categoria">{category}</p>
                    <p className="nombre-gasto">{name}</p>
                    <p className="fecha-gasto">
                        Added: {""}
                        <span>{formatDate(dateS)}</span>
                    </p>
                </div>  
            </div>
            <p className="cantidad-gasto">${amount}</p>   
        </div>
    )
}

export default Spend