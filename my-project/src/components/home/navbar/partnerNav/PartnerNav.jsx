import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PartnerNav = () => {
  const userLogin = useSelector((state) => state.user?.currentUser);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <div
      className="box_tool_67"
      style={
        location === "/customer" || location === "/supplier"
          ? { backgroundColor: "rgb(0, 89, 193)" }
          : {}
      }
    >
      <i className="fa-solid fa-user-tie"></i>
      <p>Đối tác</p>
      {/* Các mục trong Đối tác */}
      <ul className="container_67">
        <li className="box_menu_67" onClick={() => navigate("/customer")}>
          <i className="fa-solid fa-user"></i>
          <a href="#">Khách hàng</a>
        </li>
        {userLogin.manager ? (
          <li className="box_menu_67" onClick={() => navigate("/supplier")}>
            <i className="fa-solid fa-users-viewfinder"></i>
            <a href="#">Nhà cung cấp</a>
          </li>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
};

export default PartnerNav;
