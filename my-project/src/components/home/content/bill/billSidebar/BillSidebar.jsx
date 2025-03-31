const BillSidebar = () => {
  return (
    <div className="column_filter">
      {/* <!-- bảng thời gian --> */}
      <div className="filters_67">
        <h3>Thời gian</h3>
        <input type="date" />
      </div>
      {/* <!-- bảng trạng thái --> */}
      <div className="filters_67">
        <h3>Trạng thái</h3>
        <div className="choose_option_67">
          <input
            className="phuongthuc"
            type="text"
            placeholder="Chọn phương thức bán hàng"
          />
          <div className="option_67">
            <p>Không giao hàng</p>
            <p>Giao hàng</p>
          </div>
        </div>
        <div className="checkbox-p_67">
          <input type="checkbox" />
          <p>Đang xử lý</p>
        </div>
        <div className="checkbox-p_67">
          <input type="checkbox" />
          <p>Hoàn thành</p>
        </div>
        <div className="checkbox-p_67">
          <input type="checkbox" />
          <p>Không giao được</p>
        </div>
        <div className="checkbox-p_67">
          <input type="checkbox" />
          <p>Đã hủy</p>
        </div>
      </div>
      {/* <!-- Người tạo --> */}
      <div className="filters_67">
        <h3>Người tạo</h3>
        <input type="text" placeholder="Nhập người tạo" />
      </div>
      {/* <!-- Người bán --> */}
      <div className="filters_67">
        <h3>Người bán</h3>
        <input type="text" placeholder="Nhập người nhận đặt" />
      </div>
      {/* <!-- Trạng thái giao hàng --> */}
      <div className="filters_67">
        <h3>Trạng thái giao hàng</h3>
        <div className="checkbox-p_67">
          <input type="checkbox" />
          <p>Chờ xử lí</p>
        </div>
        <div className="checkbox-p_67">
          <input type="checkbox" />
          <p>Láy hàng</p>
        </div>
        <div className="checkbox-p_67">
          <input type="checkbox" />
          <p>Giao hàng</p>
        </div>
        <div className="checkbox-p_67">
          <input type="checkbox" />
          <p>Giao thành công</p>
        </div>
        <div className="checkbox-p_67">
          <input type="checkbox" />
          <p>Chuyển hoàn</p>
        </div>
        <div className="checkbox-p_67">
          <input type="checkbox" />
          <p>Đã chuyển hoàn</p>
        </div>
        <div className="checkbox-p_67">
          <input type="checkbox" />
          <p>Đã hủy</p>
        </div>
      </div>
      {/* <!-- Kênh bán --> */}
      <div className="filters_67">
        <h3>Kênh bán</h3>
        <input type="text" placeholder="Nhập kênh bán" />
      </div>
      {/* <!-- Đối tác giao hàng --> */}
      <div className="filters_67">
        <h3>Đối tác giao hàng</h3>
        <input type="text" placeholder="Nhập người giao" />
      </div>
      {/* <!-- Thời gian giao hàng --> */}
      <div className="filters_67">
        <h3>Thời gian giao hàng</h3>
        <input type="date" />
      </div>
      {/* <!-- Khu vực giao hàng --> */}
      <div className="filters_67">
        <h3>Khu vực giao hàng</h3>
        <input type="text" placeholder="Nhập Tỉnh/TP - Quận/Huyện" />
      </div>
      {/* <!-- Phương thức --> */}
      <div className="filters_67">
        <h3>Phương thức</h3>
        <input
          className="thanhtoan"
          type="text"
          placeholder="Chọn phương thức thanh toán"
        />
        {/* <!-- bảng option phương thức thanh toán --> */}
        <div className="drop_list_67">
          <p>Tiền mặt</p>
          <p>Thẻ</p>
          <p>Chuyển khoản</p>
        </div>
      </div>
      {/* <!-- Bảng giá --> */}
      <div className="filters_67">
        <h3>Bảng giá</h3>
        <input type="text" placeholder="Nhập bảng giá" />
      </div>
    </div>
  );
};

export default BillSidebar;
