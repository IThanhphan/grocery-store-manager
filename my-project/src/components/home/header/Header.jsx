import "./header.css";
import { useState } from "react";
import logo1 from "../../../assets/imgs/logo1.png";
import logo2 from "../../../assets/imgs/logo2.png";
import BoxAccount from "./boxAccount/BoxAccount";
import AccountModal from "./accountModal/AccountModal";

const Header = () => {
  const [isShowAccountBox, setIsShowAccountBox] = useState(false);
  return (
    <>
      <div className="header_67">
        <div className="logo_67">
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="name" />
        </div>
        <div className="right_67">
          <div className="box_67">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div className="box_67">
            <i className="fa-solid fa-gear"></i>
            <ul className="menu_67">
              <li className="box_67">
                <i className="fa-solid fa-wrench"></i>
                <a href="#">Thiết lập cửa hàng</a>
              </li>
              <li className="box_67">
                <i className="fa-solid fa-image-portrait"></i>
                <a href="#">Quản lý người dùng</a>
              </li>
              <li className="box_67">
                <i className="fa-solid fa-magnifying-glass-location fa-flip-horizontal"></i>
                <a href="#">Quản lý chi nhánh</a>
              </li>
              <li className="box_67">
                <i className="fa-solid fa-clock-rotate-left"></i>
                <a href="#">Lịch sử thao tác</a>
              </li>
            </ul>
          </div>
          <BoxAccount onShowAccountBox={setIsShowAccountBox}></BoxAccount>
        </div>
      </div>
      {isShowAccountBox ? <AccountModal onShowAccountBox={setIsShowAccountBox}></AccountModal> : <></>}
    </>
  );
};

export default Header;
