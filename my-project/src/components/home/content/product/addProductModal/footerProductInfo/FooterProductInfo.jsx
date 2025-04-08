import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  addNewProduct,
  getAllUnit,
  addNewUnit
} from "../../../../../../callAPI/productAPI";

const FooterProductInfo = ({ productModalFromParent, onSetProductModal }) => {
  const [showAddUnit, setShowAddUnit] = useState(false);
  const [listUnit, setListUnit] = useState([]);
  const [newUnit, setNewUnit] = useState("");
  const navigate = useNavigate();

  const handleAddUnit = async () => {
    await addNewUnit(newUnit);
    setNewUnit("");
    setShowAddUnit(false);
  }

  useEffect(() => {
    const fetch = async () => {
      const unitArr = await getAllUnit();
      if (unitArr.length > 0) {
        onSetProductModal(prev => ({ ...prev, unit: unitArr[0].name }));
      }
      setListUnit(unitArr);
    };
    fetch();
  }, [showAddUnit]);

  const handleAddProduct = async () => {
    const formData = new FormData();
    formData.append("name", productModalFromParent.name);
    formData.append("categoryName", productModalFromParent.categoryName);
    formData.append("supplierName", productModalFromParent.supplierName);
    formData.append("brandName", productModalFromParent.brand);
    formData.append("unitName", productModalFromParent.unit);
    formData.append("importPrice", productModalFromParent.importPrice);
    formData.append("sellPrice", productModalFromParent.sellPrice);
    formData.append("stock", productModalFromParent.stock);
    formData.append("expirationDate", productModalFromParent.expirationDate);
    if (productModalFromParent.imageFile) {
      formData.append("image", productModalFromParent.imageFile);
    }
    await addNewProduct(formData);
    navigate("/product");
  };
  return (
    <>
      <div className="dropdown-group-08">
        <div className="default-view-08">
          <select
            className="full-width-dropdown-08"
            value={productModalFromParent.unit}
            onChange={(e) =>
              onSetProductModal((pre) => ({ ...pre, unit: e.target.value }))
            }
          >
            {listUnit.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
          <button
            className="toggle-btn-08"
            onClick={() => setShowAddUnit(!showAddUnit)}
          >
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
        {showAddUnit ? (
          <div className="detailed-view-08">
            <div className="select-group-08">
              <label>
                Đơn vị cơ bản <i className="fas fa-info-circle"></i>
              </label>
              <input
                type="text"
                className="product-text-input-08"
                placeholder="Đơn vị cơ bản"
                value={newUnit}
                onChange={(e) => setNewUnit(e.target.value)}
              />
              <div className="select-with-button-08">
                <button className="save-btn-08" onClick={handleAddUnit}>
                  <i className="fas fa-plus"></i> Thêm đơn vị
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="action-buttons-08">
        <button className="save-btn-08" onClick={handleAddProduct}>
          <i className="fas fa-save"></i> Lưu
        </button>
        <button className="cancel-btn-08" onClick={() => navigate("/product")}>
          <i className="fas fa-times"></i> Bỏ qua
        </button>
      </div>
    </>
  );
};

export default FooterProductInfo;
