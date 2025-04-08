import "./addProductModal.css";
import MainProductInfo from "./mainProductInfo/MainProductInfo";
import FooterProductInfo from "./footerProductInfo/FooterProductInfo";
import PopupProductCategory from "./mainProductInfo/PopupProductCategory";
import PopupProductBrand from "./mainProductInfo/PopupProductBrand";
import PopupSupplier from "./mainProductInfo/PopupSupplier";
import { useState } from "react";

const AddProductModal = () => {
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [showBrandPopup, setShowBrandPopup] = useState(false);
  const [showSupplierPopup, setShowSupplierPopup] = useState(false);
  const [image, setImage] = useState(null);
  const [productModal, setProductModal] = useState({
    importPrice: 0,
    sellPrice: 0,
    name: "",
    stock: 0,
    expirationDate: "",
    categoryName: "",
    supplierName: "",
    brand: "",
    unit: "",
    imageFile: null,
  });
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setProductModal((pre) => {
        return { ...pre, imageFile: file };
      });
    }
  };
  return (
    <div className="addProduct-body-08">
      <div className="container-08">
        <h1 className="addProduct-title-08">Thêm hàng</h1>
        <div className="tabs-08">
          <ul>
            <li>
              <a href="#" className="active">
                Thông tin
              </a>
            </li>
          </ul>
        </div>
        <MainProductInfo
          showCategoryPopupFromParent={showCategoryPopup}
          showBrandPopupFromParent={showBrandPopup}
          showSupplierPopupFromParent={showSupplierPopup}
          productModalFromParent={productModal}
          onSetProductModal={setProductModal}
          onSetShowCategoryPopup={setShowCategoryPopup}
          onSetShowBrandPopup={setShowBrandPopup}
          onSetShowSupplierPopup={setShowSupplierPopup}
        ></MainProductInfo>

        {/* <!-- Hình ảnh --> */}
        <div className="image-gallery">
          <div
            className="image-placeholder"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={() => {
              setImage(null);
              setProductModal((pre) => {
                return { ...pre, imageFile: null };
              });
            }}
          >
            {image ? (
              <img
                src={image}
                alt="Preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* <!-- Footer --> */}
        <FooterProductInfo
          productModalFromParent={productModal}
          onSetProductModal={setProductModal}
        ></FooterProductInfo>
      </div>
      {/* <!-- Popup (Modal) cho Nhóm hàng --> */}
      {showCategoryPopup ? (
        <PopupProductCategory
          onSetShowCategoryPopup={setShowCategoryPopup}
        ></PopupProductCategory>
      ) : (
        <></>
      )}
      {/* <!-- Popup (Modal) cho Thương hiệu --> */}
      {showBrandPopup ? (
        <PopupProductBrand
          onSetShowBrandPopup={setShowBrandPopup}
        ></PopupProductBrand>
      ) : (
        <></>
      )}
      {/* <!-- Popup (Modal) cho Nhà cung cấp --> */}
      {showSupplierPopup ? (
        <PopupSupplier
          onSetShowSupplierPopup={setShowSupplierPopup}
        ></PopupSupplier>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AddProductModal;
