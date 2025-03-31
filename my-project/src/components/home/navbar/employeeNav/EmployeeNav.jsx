import { useNavigate, useLocation } from "react-router-dom";

const EmployeeNav = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const employeeItems = [
    {
      id: 1,
      cate: "Nhân viên",
      icon: "fa-solid fa-user-group",
    },
    {
      id: 2,
      cate: "Lịch làm việc",
      icon: "fa-solid fa-calendar",
    },
    {
      id: 3,
      cate: "Chấm công",
      icon: "fa-solid fa-calendar-days",
    },
  ];
  const handleClick = (item) => {
    if (item.id === 1) navigate("/employee");
    if (item.id === 2) navigate("/workSchedule");
    if (item.id === 3) navigate("/timekeeping");
  };
  return (
    <div
      className="box_tool_67"
      style={
        location === "/employee" ||
        location === "/workSchedule" ||
        location === "/timekeeping"
          ? { backgroundColor: "rgb(0, 89, 193)" }
          : {}
      }
    >
      <i className="fa-solid fa-user-group"></i>
      <p>Nhân viên</p>
      {/* Các mục trong Nhân viên */}
      <ul className="container_67">
        {employeeItems.map((item) => (
          <li
            className="box_menu_67"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            <i className={item.icon}></i>
            <a href="#">{item.cate}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeNav;
