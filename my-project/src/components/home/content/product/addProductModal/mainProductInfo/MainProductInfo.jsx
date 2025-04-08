import { useState, useEffect } from "react";
import { getAllCategory } from "../../../../../../callAPI/categoryAPI";
import { getAllSupplier } from "../../../../../../callAPI/supplierAPI";
import { getAllBrand } from "../../../../../../callAPI/productAPI";

const MainProductInfo = ({
  showCategoryPopupFromParent,
  showBrandPopupFromParent,
  showSupplierPopupFromParent,
  productModalFromParent,
  onSetProductModal,
  onSetShowCategoryPopup,
  onSetShowBrandPopup,
  onSetShowSupplierPopup,
}) => {
  const [showListCategory, setShowListCategory] = useState(false);
  const [showListBrand, setShowListBrand] = useState(false);
  const [showListSupplier, setShowListSupplier] = useState(false);
  const [listCategory, setListCategory] = useState([]);
  const [listSupplier, setListSupplier] = useState([]);
  const [listBrand, setListBrand] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const categoryArr = await getAllCategory();
      const supplierArr = await getAllSupplier();
      const brandArr = await getAllBrand();
      setListSupplier(supplierArr);
      setListCategory(categoryArr);
      setListBrand(brandArr);
    };
    fetch();
  }, [showCategoryPopupFromParent, showBrandPopupFromParent, showSupplierPopupFromParent]);
  return (
    <div className="main-form-08">
      {/* Mã hàng */}
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
      {/* Giá vốn */}
      <div>
        <label className="label-08">
          Giá vốn <i className="fas fa-info-circle"></i>
        </label>
        <input
          type="text"
          className="product-number-input-08"
          value={productModalFromParent.importPrice}
          onChange={(e) =>
            onSetProductModal((pre) => {
              return { ...pre, importPrice: Number(e.target.value) };
            })
          }
        />
      </div>
      {/* Giá bán */}
      <div>
        <label className="label-08">
          Giá bán <i className="fas fa-info-circle"></i>
        </label>
        <input
          type="text"
          className="product-number-input-08"
          value={productModalFromParent.sellPrice}
          onChange={(e) =>
            onSetProductModal((pre) => {
              return { ...pre, sellPrice: Number(e.target.value) };
            })
          }
        />
      </div>
      {/* Tên hang */}
      <div>
        <label className="label-08">
          Tên hàng <i className="fas fa-info-circle"></i>
        </label>
        <input
          type="text"
          className="product-text-input-08"
          value={productModalFromParent.name}
          onChange={(e) =>
            onSetProductModal((pre) => {
              return { ...pre, name: e.target.value };
            })
          }
        />
      </div>
      {/* Tồn kho */}
      <div>
        <label className="label-08">
          Tồn kho <i className="fas fa-info-circle"></i>
        </label>
        <input
          type="number"
          className="product-number-input-08"
          value={productModalFromParent.stock}
          onChange={(e) =>
            onSetProductModal((pre) => {
              return { ...pre, stock: Number(e.target.value) };
            })
          }
        />
      </div>
      {/* Hạn sử dụng */}
      <div>
        <label className="label-08">
          Hạn sử dụng <i className="fas fa-info-circle"></i>
        </label>
        <input
          type="date"
          className="product-number-input-08"
          value={productModalFromParent.expirationDate}
          onChange={(e) =>
            onSetProductModal((pre) => {
              return { ...pre, expirationDate: e.target.value };
            })
          }
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      {/* Loại hàng */}
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
              {productModalFromParent.categoryName || "--Chọn loại hàng"}
            </div>
            {showListCategory ? (
              <div className="dropdown-options-08">
                {listCategory.map((item) => (
                  <div
                    className="dropdown-option-08"
                    data-value="my-pham"
                    key={item._id}
                    onClick={() => {
                      onSetProductModal((pre) => {
                        return { ...pre, categoryName: item.name };
                      });
                      setShowListCategory(false);
                    }}
                  >
                    {item.name}
                  </div>
                ))}
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
      {/* Nhà cung cấp */}
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
              {productModalFromParent.supplierName || "--Chọn nhà cung cấp"}
            </div>
            {showListSupplier ? (
              <div className="dropdown-options-08">
                {listSupplier.map((item) => (
                  <div
                    className="dropdown-option-08"
                    data-value="my-pham"
                    key={item._id}
                    onClick={() => {
                      onSetProductModal((pre) => {
                        return { ...pre, supplierName: item.name };
                      });
                      setShowListSupplier(false);
                    }}
                  >
                    {item.name}
                  </div>
                ))}
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
      {/* Thương hiệu */}
      <div className="select-group-08">
        <label className="label-08">
          Thương hiệu <i className="fas fa-info-circle"></i>
        </label>
        <div className="custom-select-group-08">
          <div className="custom-dropdown-08">
            <div
              className="dropdown-selected-08"
              onClick={() => setShowListBrand(!showListBrand)}
            >
              {productModalFromParent.brand || "--Chọn thương hiệu"}
            </div>
            {showListBrand ? (
              <div className="dropdown-options-08">
              {listBrand.map((item) => (
                <div
                  className="dropdown-option-08"
                  data-value="my-pham"
                  key={item._id}
                  onClick={() => {
                    onSetProductModal((pre) => {
                      return { ...pre, brand: item.name };
                    });
                    setShowListBrand(false);
                  }}
                >
                  {item.name}
                </div>
              ))}
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
