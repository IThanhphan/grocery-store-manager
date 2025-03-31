import { useRef } from "react";
import { updateProduct } from "../../../../../callAPI/productAPI";

const ProductModal = ({ productInfo, onSetShowProduct }) => {
  console.log(productInfo);
  const modalRef = useRef(null);
  const infoProductsModal = [
    {
      name: "Mã hàng:",
      key: "productId",
      value: productInfo.productId,
      canChange: false
    },
    {
      name: "Loại hàng:",
      key: "categoryName",
      value: productInfo.categoryName,
      canChange: false
    },
    {
      name: "Thương hiệu:",
      key: "brand",
      value: productInfo.brand,
      canChange: false
    },
    {
      name: "Định mức tồn:",
      key: "stock",
      value: productInfo.stock,
      canChange: false
    },
    {
      name: "Giá bán:",
      key: "sellPrice",
      value: productInfo.sellPrice,
      canChange: true
    },
    {
      name: "Giá vốn:",
      key: "importPrice",
      value: productInfo.importPrice,
      canChange: false
    },
    {
      name: "Nhà cung cấp:",
      key: "supplierName",
      value: productInfo.supplierName,
      canChange: false
    },
  ];
  const handleCloseProductInfo = () => {
    onSetShowProduct(null);
  };

  const changeProductInfo = (e, item) => {
    onSetShowProduct((pre) => {
      return {...pre, [item.key]: e.target.value}
    });
  }

  const handleUpdate = () => {
    console.log(productInfo);
    updateProduct(productInfo.id, {
      productId: productInfo.productId,
      categoryName: productInfo.categoryName,
      brand: productInfo.brand,
      stock: productInfo.stock,
      sellPrice: productInfo.sellPrice,
      importPrice: productInfo.importPrice,
      supplierName: productInfo.supplierName
    });
    onSetShowProduct(null);
  }

  return (
    <div className="modal" id="productModal" ref={modalRef}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 id="modalProductName">Tên sản phẩm: {productInfo.name}</h2>
          <span className="modal-close" onClick={handleCloseProductInfo}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-product-info">
            <div className="modal-product-status">
              <span className="status-direct-sale">
                <i className="fas fa-check"></i> Bán trực tiếp
              </span>
              <span className="status-no-points">
                <i className="fas fa-times"></i> Không tích điểm
              </span>
            </div>
            <div className="modal-product-details">
              <div className="modal-product-image">
                <img id="modalProductImage" src={productInfo.image} alt="Hình ảnh sản phẩm" />
              </div>
              <div className="modal-product-meta">
                {infoProductsModal.map((item) => (
                  <p key={item.key}>
                    <strong>{item.name}</strong>
                    <span id="modalProductCode">
                      <input type="text" value={item.value} onChange={(e) => changeProductInfo(e, item)} disabled={!item.canChange} />
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-green" id="updateBtn" onClick={handleUpdate}>Cập nhật</button>
          <button className="btn btn-red" id="deleteBtn">Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
