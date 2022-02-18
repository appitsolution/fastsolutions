import React from "react"
import Rectangle2 from "../images/icon/Rectangle2.svg"
import RectanglTest from "../images/icon/RectanglTest.svg"
const Notification = ({ children, position, weight }) => {
  return (
    <p className="notification-text" style={{ fontWeight: `${weight}` }}>
      {children}
      <img src={RectanglTest} className={`notification-image-${position}`} />
    </p>
  )
}
export default Notification
