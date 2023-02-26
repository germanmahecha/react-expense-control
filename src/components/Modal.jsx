import closeBtn from './../img/cerrar.svg'
const Modal = ({setModal, modalAnimation, setModalAnimation}) => {
    const closeModal = () => {
        setModalAnimation(false)

        setTimeout(() => {
            setModal(false)
        }, 300);
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

            <form className={ `formulario ${ modalAnimation ? 'animar' : 'cerrar'}` }>
                <legend>New Spend</legend>
            </form>
        </div>
    )
}

export default Modal