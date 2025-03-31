import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ProductHeader = () => {
  const navigate = useNavigate();
  const dropDownMenu = useRef(null);
  const handleDropDownMenu = () => {
    dropDownMenu.current.classList.toggle("show");
  };

  return (
    <div className="content-header">
      <h1>Hàng hóa</h1>
      <div className="search-bar2">
        <div className="search-container">
          <div className="input-wrapper">
            <i className="fas fa-search search-icon"></i>
            <input placeholder="Theo mã, tên hàng" type="text" className="search-input"/>
          </div>
          <button className="dropdown-toggle" onClick={handleDropDownMenu}>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        <div ref={dropDownMenu} className="dropdown-menu">
            <input
              placeholder="Theo mã, tên hàng"
              type="text"
              className="dropdown-input"
            />
            <input
              placeholder="Theo ghi chú, mô tả đặt hàng"
              type="text"
              className="dropdown-input"
            />
            <button className="btn-green search-btn">Tìm kiếm</button>
          </div>
      </div>
      <div className="button-group">
        <div className="dropdown-container">
          <button className="btn-green" onClick={() => navigate("/addProduct")}>
            + Thêm hàng hóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
