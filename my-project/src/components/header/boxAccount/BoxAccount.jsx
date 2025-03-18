import "./boxAccount.css"

const BoxAccount = () => {
  return (
    <div className="box">
      <p>
        <b>0963670363</b>
      </p>
      <i className="fa-solid fa-circle-user"></i>
      <ul className="menu_user">
        <li className="box">
          <i className="fa-solid fa-address-card"></i>
          <a href="/">Tài khoản</a>
        </li>
        <li className="box">
          <i className="fa-solid fa-arrow-up-from-bracket fa-rotate-90"></i>
          <a href="/">Đăng xuất</a>
        </li>
      </ul>
    </div>
  );
};

export default BoxAccount;