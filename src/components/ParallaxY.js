import React, { useState } from "react"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"
import { parallaxyLeft, parallaxyRight } from "./parallaxY.module.css"

const ParallaxY = ({ position = "left", children }) => {
  const [activeLeft, setActiveLeft] = useState(false)
  const [activeRight, setActiveRight] = useState(false)

  const setEntered = () => {
    if (position === "left") {
      if (activeLeft) {
        return
      } else {
        setActiveLeft(true)
      }
    } else if (position === "right") {
      if (activeRight) {
        return
      } else {
        setActiveRight(true)
      }
    } else {
      return
    }
  }
  const styleActiveLeft = {
    opacity: 1,
    transform: "translateX(0) scaleX(1)",
  }
  const styleActiveRight = {
    opacity: 1,
    transform: "translateX(0)",
  }
  return (
    <>
      <ParallaxProvider>
        <Parallax
          onEnter={() => {
            setEntered()
          }}
          onExit={() => {
            setEntered()
          }}
        >
          {position === "left" ? (
            <div
              className={parallaxyLeft}
              style={activeLeft ? styleActiveLeft : null}
            >
              {children}
            </div>
          ) : null}
          {position === "right" ? (
            <div
              className={parallaxyRight}
              style={activeRight ? styleActiveRight : null}
            >
              {children}
            </div>
          ) : null}
        </Parallax>
      </ParallaxProvider>
    </>
  )
}
export default ParallaxY
