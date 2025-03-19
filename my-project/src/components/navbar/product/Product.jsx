const Product = () => {
  return (
    <div className="box_tool_67">
      <i className="fa-solid fa-box"></i>
      <p>Hàng hóa</p>
      {/* Các mục trong Hàng hóa */}
      <ul className="container_67">
        <li className="box_menu_67">
          <i className="fa-solid fa-table"></i>
          <a href="#">Danh mục</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-tags"></i>
          <a href="#">Thiết lập giá</a>
        </li>
        <li className="box_menu_67">
          <i className="fa-solid fa-clipboard-check"></i>
          <a href="#">Kiểm kho</a>
        </li>
      </ul>
    </div>
  );
};

export default Product;
