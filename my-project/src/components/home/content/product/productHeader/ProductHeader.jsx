import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../../../../callAPI/productAPI";

const ProductHeader = ({ listDeleteProducts, onSetProducts }) => {
  const navigate = useNavigate();
  const dropDownMenu = useRef(null);
  const handleDropDownMenu = () => {
    dropDownMenu.current.classList.toggle("show");
  };

  const handleDeleteProducts = async () => {
    await Promise.all(
      listDeleteProducts.map((productID) => deleteProduct(productID))
    );
    onSetProducts((pre) =>
      pre.filter((item) => !listDeleteProducts.includes(item._id))
    );
  };

  return (
    <div className="content-header">
      <h1>Hàng hóa</h1>
      <div className="search-bar2">
        <div className="search-container">
          <div className="input-wrapper">
            <i className="fas fa-search search-icon"></i>
            <input
              placeholder="Theo mã, tên hàng"
              type="text"
              className="search-input"
            />
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
          <button
            className="btn-delete btn-green"
            onClick={handleDeleteProducts}
          >
            Xóa
          </button>
        </div>
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
