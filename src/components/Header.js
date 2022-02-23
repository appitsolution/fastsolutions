import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import logo from "../images/icon/Logo.svg"
import imgBottom from "../images/icon/arrow-bottom.svg"
import menuImg from "../images/icon/menu.svg"
import closeImg from "../images/icon/closeButton.svg"
import "../sass/main.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      wpMenu {
        menuItems {
          nodes {
            label
            url
            parentDatabaseId
            childItems {
              nodes {
                url
                label
              }
            }
          }
        }
      }
    }
  `)
  const menu = data.wpMenu.menuItems.nodes.filter(
    num => num.parentDatabaseId === 0
  )
  console.dir(menu)
  menu.shift()
  const [openEl, setOpenEl] = useState(false)
  const openMenu = () => {
    setOpenEl(!openEl)
    if (!openEl) {
      document.querySelector("body").style.overflowY = "hidden"
      console.dir(document.querySelector("#__getsby"))
    } else {
      document.querySelector("body").style.overflowY = "auto"
    }
  }
  return (
    <>
      <header className="header">
        <nav className="navigation">
          <Link to="/" className="navigation__logo">
            <img src={logo} />
          </Link>
          <ul className="navigation__list">
            {menu.map(num => (
              <li className="navigation__item">
                {num.childItems.nodes.length === 0 ? (
                  <Link className="navigation__link" to={num.url}>
                    {num.label}
                  </Link>
                ) : (
                  <a className="navigation__link" src="">
                    {num.label}
                    <div className="navigation__link-block">
                      <ul className="navigation__link-list">
                        {num.childItems.nodes.map(item => (
                          <li className="navigation__link-list-item">
                            <Link
                              to={item.url}
                              className="navigation__link-list-item-link"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <img src={imgBottom} className="navigation__item-img" />
                  </a>
                )}
              </li>
            ))}
          </ul>

          <button className="menu-open">
            <img
              src={menuImg}
              onClick={openMenu}
              className={`menu-open-icon-open ${openEl && "active"}`}
            />
            <img
              src={closeImg}
              onClick={openMenu}
              className={`menu-open-icon-close ${!openEl && "active"}`}
            />
          </button>
          <div className={`navigation__mobile ${openEl && "active"}`}>
            <ul className="navigation__list-mobile">
              {menu.map(num =>
                num.childItems.nodes.length === 0 ? (
                  <li className="navigation__item">
                    <Link to={num.url} className="navigation__link">
                      {num.label}
                    </Link>
                  </li>
                ) : (
                  <li className="navigation__item">
                    <a className="navigation__link" src="">
                      {num.label}
                      <img src={imgBottom} className="navigation__item-img" />
                    </a>
                    <ul className="navigation__link-list-mobile active">
                      {num.childItems.nodes.map(item => (
                        <li className="navigation__link-list-mobile-item">
                          <Link
                            to={item.url}
                            className="navigation__link-list-mobile-item-link"
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Header
// (
//   <ul className="navigation__list">
//     <li className="navigation__item">
//       <Link to="/about" className="navigation__link">
//         O nas
//         <img src={imgBottom} className="navigation__item-img" />
//       </Link>
//     </li>
//     <li className="navigation__item">
//       <a className="navigation__link" src="">
//         Oferta
//         <div className="navigation__link-block">
//           <ul className="navigation__link-list">
//             <li className="navigation__link-list-item">
//               <Link to="/testmark" className="navigation__link-list-item-link">
//                 Badania marketingowe
//               </Link>
//             </li>
//             <li className="navigation__link-list-item">
//               <Link
//                 to="/satisfaction"
//                 className="navigation__link-list-item-link"
//               >
//                 Badania satysfakcji klientów
//               </Link>
//             </li>
//             <li className="navigation__link-list-item">
//               <Link
//                 to="/misteriousclient"
//                 className="navigation__link-list-item-link"
//               >
//                 Tajemniczy klient
//               </Link>
//             </li>
//             <li className="navigation__link-list-item">
//               <Link
//                 to="/socialstudies"
//                 className="navigation__link-list-item-link"
//               >
//                 Badania społeczne
//               </Link>
//             </li>
//             <li className="navigation__link-list-item">
//               <Link to="/survey" className="navigation__link-list-item-link">
//                 Badanie Satysfkacji Praconików
//               </Link>
//             </li>
//             <li className="navigation__link-list-item">
//               <Link to="/fieldwork" className="navigation__link-list-item-link">
//                 Koordynacja i realizacja badań - Fieldwork
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <img src={imgBottom} className="navigation__item-img" />
//       </a>
//     </li>
//     <li className="navigation__item">
//       <a className="navigation__link" src="">
//         Fokusownia Rzeszów
//       </a>
//     </li>
//     <li className="navigation__item">
//       <Link to="/ourcustomers" className="navigation__link">
//         Nasi Klienci
//       </Link>
//     </li>
//     <li className="navigation__item">
//       <Link to="/joboffers" className="navigation__link">
//         Oferty pracy
//       </Link>
//     </li>
//     <li className="navigation__item">
//       <a className="navigation__link" src="">
//         Baza wiedzy
//         <img src={imgBottom} className="navigation__item-img" />
//       </a>
//     </li>
//     <li className="navigation__item">
//       <Link to="/contacts" className="navigation__link">
//         Kontakt
//       </Link>
//     </li>
//   </ul>
// )
