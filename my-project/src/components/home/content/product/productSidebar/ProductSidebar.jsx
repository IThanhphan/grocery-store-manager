const ProductSidebar = () => {
  return (
    <div className="sidebar">
      <div className="card">
        <details>
          <summary>
            <span>Loại hàng</span>
            <i className="fas fa-chevron-down toggle-icon"></i>
          </summary>
          <div className="toggle-content">
            <label className="checkbox-label">
              <input type="checkbox" />
              Hàng hóa
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              Dịch vụ
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              Combo - Đóng gói
            </label>
          </div>
        </details>
      </div>
      <div className="card">
        <details>
          <summary>
            <span>Tồn kho</span>
            <i className="fas fa-chevron-down toggle-icon"></i>
          </summary>
          <div className="toggle-content">
            <label className="radio-label">
              <input name="tonkho" type="radio" />
              Tất cả
            </label>
            <label className="radio-label">
              <input name="tonkho" type="radio" />
              Dưới định mức tồn
            </label>
            <label className="radio-label">
              <input name="tonkho" type="radio" />
              Vượt định mức tồn
            </label>
            <label className="radio-label">
              <input name="tonkho" type="radio" />
              Còn hàng trong kho
            </label>
            <label className="radio-label">
              <input name="tonkho" type="radio" />
              Hết hàng trong kho
            </label>
            <label className="radio-label">
              <input name="tonkho" type="radio" />
              Lựa chọn khác
            </label>
          </div>
        </details>
      </div>
      <div className="card">
        <details>
          <summary>
            <span>Bán trực tiếp</span>
            <i className="fas fa-chevron-down toggle-icon"></i>
          </summary>
          <div className="toggle-content">
            <label className="radio-label">
              <input name="bantructiep" type="radio" checked />
              Tất cả
            </label>
            <label className="radio-label">
              <input name="bantructiep" type="radio" />
              Được bán trực tiếp
            </label>
            <label className="radio-label">
              <input name="bantructiep" type="radio" />
              Không được bán trực tiếp
            </label>
          </div>
        </details>
      </div>
      <div className="card">
        <h2>Thời gian tạo</h2>
        <div className="toggle-content">
          <label className="radio-label">
            <input name="thoigiantao" type="radio" checked />
            Toàn thời gian
          </label>
          <label className="radio-label">
            <input name="thoigiantao" type="radio" />
            Lựa chọn khác
          </label>
          <div className="date-picker">
            <input type="text" placeholder="Chọn thời gian" readonly />
            <i className="fas fa-calendar-alt"></i>
          </div>
        </div>
      </div>
      <div className="card">
        <details>
          <summary>
            <span>Nhà cung cấp</span>
            <i className="fas fa-chevron-down toggle-icon"></i>
          </summary>
          <div className="toggle-content">
            <select className="full-width">
              <option>Chọn nhà cung cấp</option>
            </select>
          </div>
        </details>
      </div>
      <div className="card">
        <h2>Lựa chọn hiển thị</h2>
        <div className="toggle-content">
          <label className="radio-label">
            <input name="luachonhienthi" type="radio" checked />
            Hàng đang kinh doanh
          </label>
          <label className="radio-label">
            <input name="luachonhienthi" type="radio" />
            Hàng ngừng kinh doanh
          </label>
          <label className="radio-label">
            <input name="luachonhienthi" type="radio" />
            Tất cả
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductSidebar;