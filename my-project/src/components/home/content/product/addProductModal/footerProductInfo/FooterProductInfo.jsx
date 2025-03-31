import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FooterProductInfo = () => {
  const [showAddUnit, setShowAddUnit] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="dropdown-group-08">
        <div className="default-view-08">
          <select className="full-width-dropdown-08">
            <option>Đơn vị tính</option>
          </select>
          <button className="toggle-btn-08" onClick={() => setShowAddUnit(!showAddUnit)}>
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
              />
              <div className="select-with-button-08">
                <button className="save-btn-08">
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
        <button className="save-btn-08">
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
