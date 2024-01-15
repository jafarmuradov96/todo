import './Modal.css';


const Modal = ({isModal,onSubmit, children }) => {

    if(!isModal) {
        return null
    }

    return (
        <div className='modal' onSubmit={onSubmit}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}

export default Modal;