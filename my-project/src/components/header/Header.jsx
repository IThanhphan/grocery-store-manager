import "./header.css";
import logo1 from "../../assets/imgs/logo1.png";
import logo2 from "../../assets/imgs/logo2.png";
import BoxAccount from "./boxAccount/BoxAccount";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo1} alt="logo" />
        <img src={logo2} alt="name" />
      </div>
      <div className="right">
        <div className="box">
          <i className="fa-regular fa-envelope"></i>
        </div>
        <div className="box">
          <i className="fa-solid fa-gear"></i>
          <ul className="menu">
            <li className="box">
              <i className="fa-solid fa-wrench"></i>
              <a href="/">Thiết lập cửa hàng</a>
            </li>
            <li className="box">
              <i className="fa-solid fa-image-portrait"></i>
              <a href="/">Quản lý người dùng</a>
            </li>
            <li className="box">
              <i className="fa-solid fa-magnifying-glass-location fa-flip-horizontal"></i>
              <a href="/">Quản lý chi nhánh</a>
            </li>
            <li className="box">
              <i className="fa-solid fa-clock-rotate-left"></i>
              <a href="/">Lịch sử thao tác</a>
            </li>
          </ul>
        </div>
        <BoxAccount></BoxAccount>
      </div>
    </div>
  );
};

export default Header;
