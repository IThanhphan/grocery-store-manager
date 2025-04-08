import { addNewCategory } from "../../../../../../callAPI/categoryAPI";
import { useState } from "react";

const PopupProductCategory = ({ onSetShowCategoryPopup }) => {
  const [newBrand, setNewBrand] = useState("");
  const handleAddBrand = async () => {
    await addNewCategory(newBrand);
    setNewBrand("");
    onSetShowCategoryPopup(false);
  }
  return (
    <div className="modal-08" id="group-modal">
      <div className="modal-content-08">
        <div className="modal-header-08">
          <h2>Thêm loại hàng</h2>
          <button
            className="close-modal-btn"
            onClick={() => onSetShowCategoryPopup(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body-08">
          <div className="form-group-08">
            <label>Tên loại</label>
            <input
              type="text"
              value={newBrand}
              className="product-text-input-08"
              placeholder="Tên nhóm"
              onChange={(e) => setNewBrand(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer-08">
          <button className="save-btn-08" onClick={handleAddBrand}>
            <i className="fas fa-save" ></i> Lưu
          </button>
          <button
            className="cancel-btn-08 close-modal-btn"
            onClick={() => onSetShowCategoryPopup(false)}
          >
            <i className="fas fa-times"></i> Bỏ qua
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupProductCategory;
