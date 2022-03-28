import React from "react"
import "../sass/main.scss"
const Button = ({ path, children }) => {
  return (
    <button className="button" to={path}>
      {children}
    </button>
  )
}
export default Button
