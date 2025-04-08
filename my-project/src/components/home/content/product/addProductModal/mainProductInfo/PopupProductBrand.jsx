import { useState } from "react";
import { addNewBrand } from "../../../../../../callAPI/productAPI";

const PopupProductBrand = ({ onSetShowBrandPopup }) => {
  const [newBrand, setNewBrand] = useState("");
  const handleAddBrand = async () => {
    await addNewBrand(newBrand);
    setNewBrand("");
    onSetShowBrandPopup(false);
  }
  return (
    <div className="modal-08" id="brand-modal">
      <div className="modal-content-08">
        <div className="modal-header-08">
          <h2>Thêm mới thương hiệu</h2>
          <button className="close-modal-btn" onClick={() => onSetShowBrandPopup(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body-08">
          <div className="form-group-08">
            <label>Tên thương hiệu</label>
            <input
              type="text"
              className="product-text-input-08"
              placeholder="Tên thương hiệu"
              value={newBrand}
              onChange={(e) => setNewBrand(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer-08">
          <button className="save-btn-08" onClick={handleAddBrand}>
            <i className="fas fa-save"></i> Lưu
          </button>
          <button className="cancel-btn-08 close-modal-btn" onClick={() => onSetShowBrandPopup(false)}>
            <i className="fas fa-times"></i> Bỏ qua
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupProductBrand;
