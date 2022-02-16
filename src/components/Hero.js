import React from "react";
import Button from './Button'
import Container from "./Container";
import noteIcon from '../images/icon/note.svg'
import smsIcon from '../images/icon/sms.svg';
import callCalling from '../images/icon/call-calling.svg'
import '../sass/main.scss'

const Hero = ({title, widthEl, text,buttons,call,img}) => {

    return (
        <section className="hero">

           <Container>
               <div className="hero__block">
                <div className="hero__info">
                <h1 className="hero__info-head" style={{width: `${widthEl}px`}} >{title}
                </h1>
                {text === null ? null : <p className="hero__info-description">
                    {text}
                </p>}
                {buttons.length === 0 ? null : <div className="hero__info-buttons-list">
                    {buttons.map(num => (<Button>{num}</Button>))}
                    </div>}
            </div>
            <img src={img} className="hero__block-img"/>
            </div>
            <div className="hero__aside-left" id="aside-left">
               <img className="hero__aside-left-icon" src={noteIcon} alt="noteicon" /> Brief badawczy
            </div>
            <div className="hero__aside-right" id="aside-right">
                <img className="hero__aside-right-icon" src={smsIcon} alt="smsicon" /> Napisz do nas!
            </div>
            {call && <button className="aside-right-button">
              <img className="aside-right-button-img" src={callCalling} alt="callCalling" />  Zadzwoń do nas!
            </button>}
           </Container>
        </section>
    )
}
export default Hero