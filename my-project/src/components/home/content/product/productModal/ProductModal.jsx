import { useRef } from "react";
import { updateProduct } from "../../../../../callAPI/productAPI";
import { apiName } from "../../../../../config/APIname";
import { useSelector } from "react-redux";

const ProductModal = ({ product, onSetProducts, onSetChosenProduct }) => {
  const userLogin = useSelector((state) => state.user?.currentUser);
  const modalRef = useRef(null);
  const infoProductsModal = [
    {
      name: "Mã hàng:",
      key: "productId",
      value: product.productId,
      canChange: false,
    },
    {
      name: "Loại hàng:",
      key: "categoryName",
      value: product.categoryName,
      canChange: false,
    },
    {
      name: "Thương hiệu:",
      key: "brand",
      value: product.brand,
      canChange: false,
    },
    {
      name: "Ngày hết hạn:",
      key: "expirationDate",
      value: new Date(product.expirationDate).toLocaleDateString("vi-VN"),
      canChange: false,
    },
    {
      name: "Định mức tồn:",
      key: "stock",
      value: product.stock,
      canChange: false,
    },
    {
      name: "Giá bán:",
      key: "sellPrice",
      value: product.sellPrice,
      canChange: true,
    },
    {
      name: "Giá vốn:",
      key: "importPrice",
      value: product.importPrice,
      canChange: false,
    },
    {
      name: "Đơn vị:",
      key: "unit",
      value: product.unit,
      canChange: false,
    },
    {
      name: "Nhà cung cấp:",
      key: "supplierName",
      value: product.supplierName,
      canChange: false,
    },
  ];
  const handleCloseProductInfo = () => {
    onSetChosenProduct(null);
  };

  const changeProductInfo = (e, item) => {
    onSetChosenProduct((pre) => {
      return { ...pre, [item.key]: e.target.value };
    });
  };

  const handleUpdate = () => {
    updateProduct(product._id, {
      sellPrice: product.sellPrice,
    });
    onSetProducts((pre) => {
      pre.forEach((item) => {
        if (item._id === product._id) {
          item.sellPrice = product.sellPrice;
        }
      });
      return pre;
    });
    onSetChosenProduct(null);
  };

  return (
    <div className="modal" id="productModal" ref={modalRef}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="modalProductName">Tên sản phẩm: {product.name}</h2>
          <span className="modal-close" onClick={handleCloseProductInfo}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-product-info">
            <div className="modal-product-details">
              <div className="modal-product-image">
                <img
                  id="modalProductImage"
                  src={`${apiName}${product.image}`}
                  alt="Hình ảnh sản phẩm"
                />
              </div>
              <div className="modal-product-meta">
                {infoProductsModal.map((item) => (
                  <p key={item.key}>
                    <strong>{item.name}</strong>
                    <span id="modalProductCode">
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) => changeProductInfo(e, item)}
                        disabled={!item.canChange}
                      />
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        {userLogin.manager ? (
          <div className="modal-footer">
            <button
              className="btn btn-green"
              id="updateBtn"
              onClick={handleUpdate}
            >
              Cập nhật
            </button>
            <button className="btn btn-red" id="deleteBtn">
              Xóa
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
