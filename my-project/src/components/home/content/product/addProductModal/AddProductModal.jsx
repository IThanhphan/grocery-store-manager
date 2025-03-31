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
  const [imageFile, setImageFile] = useState(null);
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };
  // const handleUpload = async () => {
  //   if (!imageFile) return alert("Chưa có file nào!");

  //   const formData = new FormData();
  //   formData.append("file", imageFile);

  //   try {
  //     const response = await fetch("http://localhost:5000/upload", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       const result = await response.json();
  //       console.log("Upload thành công:", result);
  //     } else {
  //       console.error("Lỗi upload");
  //     }
  //   } catch (error) {
  //     console.error("Lỗi mạng:", error);
  //   }
  // };
  console.log(imageFile);
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
              setImageFile(null);
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
        <FooterProductInfo></FooterProductInfo>
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
