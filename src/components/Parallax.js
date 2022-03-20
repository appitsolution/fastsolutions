import React, { useEffect } from "react"
import AOS from "aos"

import "aos/dist/aos.css"
// import "../scss/style.scss"

const Parallax = ({ position = "left", children }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    })
  }, [])

  return <div data-aos={`fade-${position}`}>{children}</div>
}
export default Parallax
