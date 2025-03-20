const Transaction = () => {
  return (
    <div className="box_tool_67">
      <i className="fa-solid fa-cart-shopping"></i>
      <p>Giao dịch</p>
      {/* Các mục trong Giao dịch */}
      <ul className="container_67">
        <li className="box_menu_67">
          <i className="fa-solid fa-box-archive"></i>
          <a href="#">Đặt hàng</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-money-bill-wave"></i>
          <a href="#">Hóa đơn</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-clipboard-list"></i>
          <a href="#">Vận đơn</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-rotate-left"></i>
          <a href="#">Trả hàng</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-cart-flatbed"></i>
          <a href="#">Nhập hàng</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-truck-arrow-right fa-flip-horizontal"></i>
          <a href="#">Trả nhập hàng</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-xmarks-lines"></i>
          <a href="#">Xuất hủy</a>
        </li>
      </ul>
    </div>
  );
};

export default Transaction;
