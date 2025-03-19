const Partner = () => {
  return (
    <div className="box_tool_67">
      <i className="fa-solid fa-user-tie"></i>
      <p>Đối tác</p>
      {/* Các mục trong Đối tác */}
      <ul className="container_67">
        <li className="box_menu_67">
          <i className="fa-solid fa-user"></i>
          <a href="#">Khách hàng</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-users-viewfinder"></i>
          <a href="#">Nhà cung cấp</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-people-arrows"></i>
          <a href="#">Đối tác giao hàng</a>
        </li>
      </ul>
    </div>
  );
};

export default Partner;