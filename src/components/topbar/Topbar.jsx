import { useEffect, useState } from "react";
import "./topbar.css";
import {
  AccountBox,
  AccountCircle,
  ArrowDropDown,
  Logout,
  Menu,
  Message,
  Notifications,
  PersonAdd,
  Search,
  Settings,
} from "@mui/icons-material";

const IconButton = ({ className, IconComponent }) => (
  <button
    className={className}
    style={{ display: "flex", alignItems: "center" }}
  >
    <IconComponent />
  </button>
);

export default function Topbar({ sideBarToggler }) {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isProfileMenuOpen && !event.target.closest(".profile")) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  const handleProfileMenu = (e) => {
    e.stopPropagation();
    setIsProfileMenuOpen((prev) => !prev);
  };

  return (
    <div className="topbar-container">
      <div className="topbar-start-side">
        <button
          onClick={() => {
            sideBarToggler();
          }}
          className="sidebar-toggle"
        >
          <IconButton IconComponent={Menu} />
        </button>
        <h3 className="title">ديزاد فايس</h3>
        <div className="search">
          <input type="text" placeholder="بحث" />
          <IconButton className="search-icon" IconComponent={Search} />
        </div>
      </div>
      <div className="topbar-end-side">
        <div className="topbar-action">
          <IconButton className="add-person active" IconComponent={PersonAdd} />
          <div className="menu">
            <h3>No Friends Add Yet</h3>
          </div>
        </div>
        <div className="topbar-action">
          <IconButton className="message" IconComponent={Message} />
          <div className="menu">
            <h3>No Messages Yet</h3>
          </div>
        </div>
        <div className="topbar-action">
          <IconButton
            className="notification active"
            IconComponent={Notifications}
          />
          <div className="menu">
            <h3>No Notifications Yet</h3>
          </div>
        </div>

        <button className="profile" onClick={handleProfileMenu}>
          <img src="/assets/person/1.jpeg" alt="Profile" />
          <div className={`profile-menu ${isProfileMenuOpen ? "active" : ""}`}>
            <ul>
              <a href="#">
                <li>
                  <span href="#">الحساب</span>
                  <AccountCircle />
                </li>
              </a>
              <a href="#">
                <li>
                  <span href="#">الاعدادات</span>
                  <Settings />
                </li>
              </a>
              <a href="#">
                <li className="logout">
                  <span href="#e">تسجيل الخروج</span>
                  <Logout />
                </li>
              </a>
            </ul>
          </div>
        </button>
      </div>
    </div>
  );
}
