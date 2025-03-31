const ProductReceiptSidebar = () => {
  return (
    <div className="column_filter">
    <div className="filters_67">
      <h3>Thời gian</h3>
      <div className="date">
        <input type="date" placeholder="Nhập ngày" />
      </div>
    </div>
    <div className="filters_67">
      <h3>Trạng thái</h3>
      <div className="checkbox-p_67">
        <input type="checkbox" />
        <p>Phiếu tạm</p>
      </div>
      <div className="checkbox-p_67">
        <input type="checkbox" />
        <p>Đã nhập hàng</p>
      </div>
      <div className="checkbox-p_67">
        <input type="checkbox" />
        <p>Đã hủy</p>
      </div>
    </div>
    <div className="filters_67">
      <h3>Người tạo</h3>
      <input className="input_67" type="text" placeholder="Nhập người tạo" />
      <div className="man_menu_67">
        <div className="menu_item_67">Huỳnh Thanh Trình</div>
        <div className="menu_item_67">Phạm Minh Quang</div>
        <div className="menu_item_67">Phan Sĩ Thành</div>
      </div>
    </div>
    <div className="filters_67">
      <h3>Người nhập</h3>
      <input className="input_67" type="text" placeholder="Nhập người nhập" />
      <div className="man_menu_67">
        <div className="menu_item_67">Huỳnh Thanh Trình</div>
        <div className="menu_item_67">Phạm Minh Quang</div>
        <div className="menu_item_67">Phan Sĩ Thành</div>
      </div>
    </div>
  </div>
  )
}

export default ProductReceiptSidebar;