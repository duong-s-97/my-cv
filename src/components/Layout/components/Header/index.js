import { NavLink, Link } from "react-router-dom";

import "./header.css";
import { publicRoutes } from "../../../../routers";
import { useEffect, useState } from "react";
import logo from "../../../../assets/logo/snapedit_1712758852793.png";

function Header() {
  //STATE
  const [scrollY, setScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    // Hàm lắng nghe sự kiện scroll
    const handleScroll = () => {
      // Cập nhật giá trị scrollY
      setScrollY(window.scrollY);
    };

    // Đăng ký hàm lắng nghe khi component được mount
    window.addEventListener("scroll", handleScroll);

    // Xoá hàm lắng nghe khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // render nav item
  const RENDER_NAV_ITEMS = (item) => {
    return (
      <NavLink
        to={item.path}
        className={`${({ isActive }) =>
          isActive
            ? "active "
            : "not-active "} text-white hover:text-blue-400 px-4 pt-3`}
        key={item.id}
        onClick={() => setShowMenu(false)}
      >
        <span className="mr-2">{item.icon}</span> {item.name}
      </NavLink>
    );
  };

  return (
    <div id="header">
      <div
        className={`absolute   inset-0 h-20 bg-black-100 bg-opacity-50 backdrop-blur-lg ${
          scrollY > 0 || showMenu ? "" : "hidden"
        }`}
      ></div>
      <div className="z-10 flex items-center justify-between w-full lg:gird lg:grid-cols-2 md:px-20">
        <Link to="/">
          <img src={logo} className="h-20" alt="" />
        </Link>
        <div className="hidden md:block">
          {publicRoutes.map((item) => RENDER_NAV_ITEMS(item))}
        </div>
        {/* button open menu mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="text-white"
          >
            <div className="item menu">
              <div className="linee linee1"></div>
              <div className="linee linee2"></div>
              <div className="linee linee3"></div>
            </div>
          </button>
        </div>
        {/* end button open menu mobile  */}
        {/* menu mobile  */}
        <div
          className={`absolute z-40 w-screen p-8 pt-20 h-screen md:hidden transition-all duration-500 bg-black-100 ease inset-0 bg-opacity-50 backdrop-blur-lg top-20 ${
            showMenu ? "left-0" : "-left-[48rem]"
          }`}
        >
          <div className="flex flex-col">
            {publicRoutes.map((item) => RENDER_NAV_ITEMS(item))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
