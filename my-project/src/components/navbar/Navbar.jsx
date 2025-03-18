import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [tools] = useState([
    { icon: "fa-eye", label: "Tổng quan" },
    { icon: "fa-box", label: "Hàng hóa" },
    { icon: "fa-cart-shopping", label: "Giao dịch" },
    { icon: "fa-user-tie", label: "Đối tác" },
    { icon: "fa-user-group", label: "Nhân viên" },
    { icon: "fa-hand-holding-dollar", label: "Sổ quỹ" },
  ]);

  return (
    <div className="navbar">
      {tools.map((tool, index) => (
        <div className="box_tool" key={index}>
          <i className={`fa-solid ${tool.icon}`}></i>
          <p>{tool.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
