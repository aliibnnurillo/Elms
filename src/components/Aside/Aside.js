import { useState, useEffect } from "react";
import * as Icon from "../Icon";
import cx from "classnames";
import "./Aside.scss";
import { Link } from "react-router-dom";

function Aside() {
  //   const menus = [
  //     {
  //       id: 1,
  //       title: "Boshqaruv paneli",
  //       icon: <Icon.System.Dashboard />,
  //       link: "/",
  //     },
  //     {
  //       id: 2,
  //       title: "Universitetlar",
  //       icon: <Icon.System.Univer />,
  //       link: "/universities",
  //     },
  //     {
  //       id: 3,
  //       title: "O'quv dasturlari",
  //       icon: <Icon.System.Univer />,
  //       link: "/study",
  //       activeClassName: "menu-active",
  //     },
  //     {
  //       id: 4,
  //       title: "Ta'lim jarayoni",
  //       icon: <Icon.System.Book />,
  //       link: "/education",
  //     },
  //     {
  //       id: 5,
  //       title: "Studentlar",
  //       icon: <Icon.System.Users />,
  //       link: "/students",
  //     },
  //   ];

  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("isOpen"))
  );

  useEffect(() => {
    localStorage.setItem("isOpen", JSON.stringify(isOpen));
    console.log(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const isOpen = JSON.parse(localStorage.getItem("isOpen"));
    if (isOpen) {
      setIsOpen(isOpen);
    }
  }, []);
  const toggle = () => setIsOpen(!isOpen);

  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <aside
        style={{ width: isOpen ? "100%" : "60px" }}
        className="app-sidebar"
      >
        <div>
          <div className="app-logo">
            <Icon.Logo.Symbol />
          </div>
          <div className="menu-item-list">
            <Link
              onClick={() => setIsActive(false)}
              activeClassName="active"
              style={{
                width: isOpen ? "100%" : "44px",
                justifyContent: isOpen ? "flex-start" : "center",
              }}
              to={"/"}
              className="menu-item"
              exact
            >
              <div className="menu-item-prefix-icon">
                <Icon.System.Dashboard />
              </div>
              <div
                style={{
                  display: isOpen ? "flex" : "none",
                }}
                className="menu-item-text"
              >
                Boshqaruv paneli
              </div>
            </Link>
            <Link
              onClick={() => setIsActive(false)}
              activeClassName="active"
              style={{
                width: isOpen ? "100%" : "44px",
                justifyContent: isOpen ? "flex-start" : "center",
              }}
              to={"/universities"}
              className="menu-item"
              exact
            >
              <div className="menu-item-prefix-icon">
                <Icon.System.Univer />
              </div>
              <div
                style={{
                  display: isOpen ? "flex" : "none",
                }}
                className="menu-item-text"
              >
                Universitetlar
              </div>
            </Link>
            <Link
              onClick={() => setIsActive(false)}
              activeClassName="active"
              style={{
                width: isOpen ? "100%" : "44px",
                justifyContent: isOpen ? "flex-start" : "center",
              }}
              className="menu-item"
              to={"/education"}
              exact
            >
              <div
                className="menu-item-prefix-icon"
                // onClick={() => setIsActive(!isActive)}
              >
                <Icon.System.Univer />
                <ul
                  className="menu-list"
                  style={{
                    display: isOpen ? "none" : "",
                  }}
                >
                  <li>Fakultet</li>
                  <li>Talim yo'nalishi</li>
                  <li>Tutorlar</li>
                </ul>
              </div>
              <div
                style={{
                  display: isOpen ? "flex" : "none",
                }}
                className="menu-item-text"
              >
                O'quv dasturlari
              </div>
            </Link>
            <div
              className="menuitem"
              style={{
                background: isActive ? "rgba(219, 212, 212, 0.1)" : "#3492ff",
              }}
            >
              <div
                activeClassName="active"
                style={{
                  width: isOpen ? "100%" : "44px",
                  justifyContent: isOpen ? "flex-start" : "center",
                }}
                to={""}
                className="item"
                exact
              >
                <div
                  className="menu-item"
                  style={{
                    justifyContent: isOpen ? "flex-start" : "center",
                  }}
                >
                  <div className="menu-item-prefix-icon">
                    <Icon.System.Book />
                  </div>
                  <div
                    onClick={() => setIsActive(!isActive)}
                    style={{
                      display: isOpen ? "flex" : "none",
                    }}
                    className="menu-item-text"
                  >
                    Ta'lim jarayoni
                  </div>
                </div>
              </div>

              <div className="sub">
                <ul className={cx("sub-menu", isActive && "sub-menu-open")}>
                  <Link to={"/"} className="sub-item">
                    <li> Fakultet</li>
                  </Link>
                  <Link to={"/"} className="sub-item">
                    Ta'lim yo'nalishi
                  </Link>
                  <Link to={"/"} className="sub-item">
                    Tutorlar
                  </Link>
                </ul>
              </div>
            </div>
            <Link
              onClick={() => setIsActive(false)}
              activeClassName="active"
              style={{
                width: isOpen ? "100%" : "44px",
                justifyContent: isOpen ? "flex-start" : "center",
              }}
              to={"/students"}
              className="menu-item"
              exact
            >
              <div className="menu-item-prefix-icon">
                <Icon.System.Users />
              </div>
              <div
                style={{
                  display: isOpen ? "flex" : "none",
                }}
                className="menu-item-text"
              >
                Studentlar
              </div>
            </Link>
          </div>
        </div>
        <div className="app-sidebar-collapse" onClick={toggle}>
          <div onClick={() => setIsActive(false)}>
            <Icon.System.Menu />
          </div>
        </div>
      </aside>
    </div>
  );
}
export default Aside;
