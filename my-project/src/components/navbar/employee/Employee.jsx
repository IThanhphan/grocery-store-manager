const Employee = () => {
  return (
    <div className="box_tool_67">
      <i className="fa-solid fa-user-group"></i>
      <p>Nhân viên</p>
      {/* Các mục trong Nhân viên */}
      <ul className="container_67">
        <li className="box_menu_67">
          <i className="fa-solid fa-user-group"></i>
          <a href="#">Nhân viên</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-calendar"></i>
          <a href="#">Lịch làm việc</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-calendar-days"></i>
          <a href="#">Chấm công</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-coins"></i>
          <a href="#">Bảng tính lương</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-sack-dollar"></i>
          <a href="#">Thiết lập hoa hồng</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-gear"></i>
          <a href="#">Thiết lập nhân viên</a>
        </li>
      </ul>
    </div>
  );
};

export default Employee;