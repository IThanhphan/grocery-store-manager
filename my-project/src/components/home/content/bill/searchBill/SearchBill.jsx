const SearchBill = () => {
  return (
    <div className="searchbox-btn_67">
      <div className="search_box_67">
        <input type="text" placeholder="Theo mã phiếu nhập" />
        <span className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span className="btn-down">
          <i className="fa-solid fa-caret-down"></i>
        </span>
        <div className="btn-down-table">
          <input type="text" placeholder="Theo mã hóa đơn" />
          <input type="text" placeholder="Theo mã, tên hàng" />
          <input
            type="text"
            placeholder="Theo mã, tên, số điện thoại khách hàng"
          />
          <input type="text" placeholder="Theo ghi chú" />
          <input type="text" placeholder="Theo ghi chú hàng hóa" />
          <button className="btn_search" type="submit">
            Tìm kiếm
          </button>
        </div>
      </div>
      <div className="btn_67">
        <div className="btn_delete_67">
          <button type="submit">Xóa</button>
        </div>
        <div className="menudown_67">
          <button type="submit" className="btn_filters">
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-caret-down"></i>
          </button>
          <div className="table_checkbox_67">
            <div>
              <input type="checkbox" />
              <p>Mã hóa đơn</p>
            </div>
            <div>
              <input type="checkbox" />
              <p>Thời gian</p>
            </div>
            <div>
              <input type="checkbox" />
              <p>Mã trả hàng</p>
            </div>
            <div>
              <input type="checkbox" />
              <p>Khách hàng</p>
            </div>
            <div>
              <input type="checkbox" />
              <p>Tổng tiền hàng</p>
            </div>
            <div>
              <input type="checkbox" />
              <p>Giảm giá</p>
            </div>
            <div>
              <input type="checkbox" />
              <p>Khách đã trả</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBill;
