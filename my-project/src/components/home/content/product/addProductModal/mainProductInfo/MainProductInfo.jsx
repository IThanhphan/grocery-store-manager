import { useState } from "react";

const MainProductInfo = ({ onSetShowCategoryPopup, onSetShowBrandPopup, onSetShowSupplierPopup }) => {
  const [showListCategory, setShowListCategory] = useState(false);
  const [showListBrand, setShowListBrand] = useState(false);
  const [showListSupplier, setShowListSupplier] = useState(false);
  return (
    <div className="main-form-08">
      <div>
        <label className="label-08">
          Mã hàng <i className="fas fa-info-circle"></i>
        </label>
        <input
          type="text"
          className="product-text-input-08"
          placeholder="Mã hàng tự động"
          readOnly
        />
      </div>
      <div>
        <label className="label-08">
          Giá vốn <i className="fas fa-info-circle"></i>
        </label>
        <input type="number" className="product-number-input-08" value="0" />
      </div>
      <div>
        <label className="label-08">
          Giá bán <i className="fas fa-info-circle"></i>
        </label>
        <input type="number" className="product-number-input-08" value="0" />
      </div>
      <div>
        <label className="label-08">
          Tên hàng <i className="fas fa-info-circle"></i>
        </label>
        <input type="text" className="product-text-input-08" />
      </div>
      <div>
        <label className="label-08">
          Tồn kho <i className="fas fa-info-circle"></i>
        </label>
        <input type="number" className="product-number-input-08" value="0" />
      </div>
      <div>
        <label className="label-08">
          Hạn sử dụng <i className="fas fa-info-circle"></i>
        </label>
        <input type="date" className="product-number-input-08" value="0" />
      </div>
      <div className="select-group-08">
        <label className="label-08">
          Loại hàng <i className="fas fa-info-circle"></i>
        </label>
        <div className="custom-select-group-08">
          <div className="custom-dropdown-08">
            <div
              className="dropdown-selected-08"
              onClick={() => setShowListCategory(!showListCategory)}
            >
              ---Chọn loại hàng---
            </div>
            {showListCategory ? (
              <div className="dropdown-options-08">
                <div className="dropdown-option-08" data-value="my-pham">
                  Mỹ phẩm
                </div>
                <div className="dropdown-option-08" data-value="nuoc-ngot">
                  Nước ngọt
                </div>
                <div className="dropdown-option-08" data-value="sua">
                  Sữa
                </div>
                <div className="dropdown-option-08" data-value="thuc-pham-lien">
                  Thực phẩm liên
                </div>
                <div className="dropdown-option-08" data-value="thuc-la">
                  Thức là
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="select-buttons-08">
            <button
              className="open-modal-btn"
              data-modal="group-modal"
              onClick={() => onSetShowCategoryPopup(true)}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="select-group-08">
        <label className="label-08">
          Nhà cung cấp <i className="fas fa-info-circle"></i>
        </label>
        <div className="custom-select-group-08">
          <div className="custom-dropdown-08">
            <div
              className="dropdown-selected-08"
              onClick={() => setShowListSupplier(!showListSupplier)}
            >
              ---Chọn nhà cung cấp---
            </div>
            {showListSupplier ? (
              <div className="dropdown-options-08">
                <div className="dropdown-option-08" data-value="my-pham">
                  Mỹ phẩm
                </div>
                <div className="dropdown-option-08" data-value="nuoc-ngot">
                  Nước ngọt
                </div>
                <div className="dropdown-option-08" data-value="sua">
                  Sữa
                </div>
                <div className="dropdown-option-08" data-value="thuc-pham-lien">
                  Thực phẩm liên
                </div>
                <div className="dropdown-option-08" data-value="thuc-la">
                  Thức là
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="select-buttons-08">
            <button
              className="open-modal-btn"
              data-modal="supplier-modal"
              onClick={() => onSetShowSupplierPopup(true)}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="select-group-08">
        <label className="label-08">
          Thương hiệu <i className="fas fa-info-circle"></i>
        </label>
        <div className="custom-select-group-08">
          <div className="custom-dropdown-08">
            <div className="dropdown-selected-08" onClick={() => setShowListBrand(!showListBrand)}>---Chọn thương hiệu---</div>
            {showListBrand ? (
              <div className="dropdown-options-08">
                <div className="dropdown-option-08" data-value="brand1">
                  Thương hiệu 1
                </div>
                <div className="dropdown-option-08" data-value="brand2">
                  Thương hiệu 2
                </div>
                <div className="dropdown-option-08" data-value="brand3">
                  Thương hiệu 3
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="select-buttons-08">
            <button
              className="open-modal-btn"
              data-modal="brand-modal"
              onClick={() => onSetShowBrandPopup(true)}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProductInfo;
