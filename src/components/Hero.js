import React from "react"
import Button from "./Button"
import Container from "./Container"
import noteIcon from "../images/icon/note.svg"
import smsIcon from "../images/icon/sms.svg"
import callCalling from "../images/icon/call-calling.svg"
import "../sass/main.scss"
import ModalWindow from "./ModalWindow"

const Hero = ({
  title,
  widthEl,
  text,
  buttons,
  call,
  img,
  widthImg,
  right,
}) => {
  const openWindow = () => {
    document.querySelector(".backdrop").classList.add("active")
    document.body.style="overflow-y: hidden;"
  }
  return (
    <section className="hero">
      <ModalWindow />
      <Container>
        <div className="hero__block-mobile">
          <h2 className="hero__block-mobile-head">{title}</h2>
          {text === null ? null : (
            <p className="hero__block-mobile-description">{text}</p>
          )}
          {img ? (
            <img src={img} className="hero__block-mobile-img" alt="icon" />
          ) : null}
          {buttons.length === 0 ? null : (
            <div className="hero__block-mobile-buttons">
              {buttons.map((num, index) =>
                index === 1 ? (
                  <button className="button" onClick={openWindow}>
                    {num}
                  </button>
                ) : (
                  <Button>{num}</Button>
                )
              )}
            </div>
          )}
          {call && (
            <button
              className="hero__block-mobile-aside-right-button"
              onClick={openWindow}
            >
              <img
                className="hero__block-mobile-aside-right-button-img"
                src={callCalling}
                alt="callCalling"
              />
              Zadzwoń do nas!
            </button>
          )}
          {/* <div className="hero__block-mobile-aside-left" id="aside-left">
            <img
              className="hero__block-mobile-aside-left-icon"
              src={noteIcon}
              alt="noteicon"
            />
            Brief badawczy
          </div>
          <div className="hero__block-mobile-aside-right-toomb">
            <div className="hero__block-mobile-aside-right" id="aside-right">
              <img
                className="hero__block-mobile-aside-right-icon"
                src={smsIcon}
                alt="smsicon"
              />
              Napisz do nas!
            </div>
          </div> */}
        </div>
        <div className="hero__block-desktop">
          <div className="hero__block">
            <div className="hero__info">
              <h1 className="hero__info-head" style={{ width: `${widthEl}px` }}>
                {title}
              </h1>
              {text === null ? null : (
                <p className="hero__info-description">{text}</p>
              )}
              {buttons.length === 0 ? null : (
                <div className="hero__info-buttons-list">
                  {buttons.map((num, index) =>
                    index === 1 ? (
                      <button className="button" onClick={openWindow}>
                        {num}
                      </button>
                    ) : (
                      <Button>{num}</Button>
                    )
                  )}
                </div>
              )}
            </div>
            {img ? (
              <img
                src={img}
                style={{
                  width: widthImg ? widthImg : "70%",
                  right: right ? right : 0,
                }}
                alt="icon"
                className="hero__block-img"
              />
            ) : null}
          </div>
          {/* <div className="hero__aside-left" id="aside-left">
            <img
              className="hero__aside-left-icon"
              src={noteIcon}
              alt="noteicon"
            />
            Brief badawczy
          </div> */}
          <button
            onClick={openWindow}
            className="hero__aside-right"
            id="aside-right"
          >
            <img
              className="hero__aside-right-icon"
              src={smsIcon}
              alt="smsicon"
            />
            Napisz do nas!
          </button>
          {call && (
            <button className="aside-right-button" onClick={openWindow}>
              <img
                className="aside-right-button-img"
                src={callCalling}
                alt="callCalling"
              />
              Zadzwoń do nas!
            </button>
          )}
        </div>
      </Container>
    </section>
  )
}
export default Hero
