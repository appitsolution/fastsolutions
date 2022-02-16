import React from 'react';
import modalIcon from '../images/icon/arrow-right.svg';
import modalImg from '../images/modal.jpg'
const ModalWindow = () =>{
    return(
        <div className='backdrop'>
            <div className='modal'>
                <div className='modal__prev'>
                <img src={modalImg} className='modal__prev-img'/>
                <p className='modal__prev-text'>
                    Powiedz nam
                    w czym możemy
                    Ci pomóc.
                </p>
                </div>
                <div className='modal__form'>
                    <form className='modal__form-submit'>
                        <p className='modal__form-submit-text'>EMAIL</p>
                        <input className='modal__form-submit-email' type="email" placeholder='kontakt@fastsolutions.com'/>
                        <p className='modal__form-submit-text'>TEMAT</p>
                        <input className='modal__form-submit-theme' type="text" placeholder='W czym możemy Ci pomóc?'/>
                        <p className='modal__form-submit-text'>WIADOMOŚĆ</p>
                        <textarea className='modal__form-submit-description' placeholder='Opisz nam czego potrzebujesz.'></textarea>
                        <button className='modal__form-submit-button'><img src={modalIcon}/></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ModalWindow