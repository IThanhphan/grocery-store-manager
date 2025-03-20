import { Link } from "react-router-dom";

const BoxAccount = () => {
  return (
    <div className="box_67">
      <p>
        <b>0963670363</b>
      </p>
      <i className="fa-solid fa-circle-user"></i>
      <ul className="menu_user_67">
        <li className="box_67">
          <i className="fa-solid fa-address-card"></i>
          <a href="/">Tài khoản</a>
        </li>
        <Link to="/login" className="link-no-underline">
          <li className="box_67">
            <i className="fa-solid fa-arrow-up-from-bracket fa-rotate-90"></i>
            <a href="/">Đăng xuất</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default BoxAccount;