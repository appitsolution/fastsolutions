import React from "react"
import Rectangle2 from "../images/icon/Rectangle2.svg"
import RectanglTest from "../images/icon/RectanglTest.svg"
const ArrayNotification = ({ array }) => {
  return (
    <ul className="permanentteam__list">
      {array.map(num => (
        <li
          className={`permanentteam__list-item${num.active ? "-active" : ""}`}
        >
          <h2
            className={`permanentteam__list-item-head${
              num.active ? "-active" : ""
            }`}
          >
            {num.head}
          </h2>
          {num.text && (
            <p className="permanentteam__list-item-text">{num.text}</p>
          )}
          {/* TODO: трикутники створюються нативно css, за допомогою бордерів, а не фото викачуються */}
          {/* {num.active ? (
            <img
              src={RectanglTest}
              className="permanentteam__list-item-img-active"
            />
          ) : (
            <img src={Rectangle2} className="permanentteam__list-item-img" />
          )} */}
        </li>
      ))}
    </ul>
  )
}
export default ArrayNotification
