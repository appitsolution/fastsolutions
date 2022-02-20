import React from "react"
import Rectangle2 from "../images/icon/Rectangle2.svg"
import RectanglTest from "../images/icon/RectanglTest.svg"
const Notification = ({ children, position, weight, color }) => {
  return (
    <p className="notification-text" style={{ fontWeight: `${weight}` }}>
      {children}
      <img
        src={color === "blue" ? Rectangle2 : RectanglTest}
        className={`notification-image-${position}`}
      />
    </p>
  )
}
export default Notification
