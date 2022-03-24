import React, { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"

// import "../scss/style.scss"

const Parallax = ({ position = "left", children }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      once: true,
      offset: 50,
      delay: 50,
    })
  })

  return (
    <div data-aos={`fade-${position}`} data-aos-anchor-placement="top-bottom">
      {children}
    </div>
  )
}
export default Parallax
