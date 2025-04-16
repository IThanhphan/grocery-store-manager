const AddBillModal = ({ onSetShowAddBillModal }) => {
  return (
    <div className="overlay">
      <div className="table_add_bill_67">
        <header>
          <p>Thêm Hóa Đơn</p>
          <i className="fa-solid fa-xmark" onClick={() => onSetShowAddBillModal(false)}></i>
        </header>
        <div className="body_67">
          <div className="box_grid_67">
            <p>Mã hóa đơn</p>
            <input type="text" placeholder="" disabled />
            <p>Mã khách hàng</p>
            <div className="dropdown_id_customer_67">
              <input className="id_customer_focus" type="text" placeholder="" />
            </div>

            <p>Tên khách hàng</p>
            <div className="dropdown_name_customer_67">
              <input className="name_customer_focus" type="text" placeholder="" />
              {/* <div className="name_customer">
                <p>Bà Hai</p>
                <p>Ông Tam</p>
                <p>Cô Tứ</p>
              </div> */}
            </div>

            <p>Mã nhân viên</p>
            <div className="dropdown_id_67">
              <input className="id_focus_67" type="text" placeholder="" />
            </div>
            <p>Tên nhân viên</p>
            <div className="dropdown_name_67">
              <input className="name_focus_67" type="text" placeholder="" />
              {/* <div className="name_nv_67">
                <p>Trọng</p>
                <p>Thành</p>
                <p>Trình</p>
              </div> */}
            </div>
          </div>
          <div className="box_grid_67">
            <p>Ngày lập hóa đơn</p>
            <input type="date" placeholder="" />
            <p>Tổng tiền</p>
            <input type="text" placeholder="" />
            <p>Số tiền phải trả</p>
            <input type="text" placeholder="" />
            <p>Phương thức thanh toán</p>
            <div className="dropdown_option_payment">
              <input className="payment_focus" type="text" placeholder="" />
              {/* <div className="option_payment">
                <p>Tiền mặt</p>
                <p>Chuyển khoảng</p>
                <p>Quẹt thẻ</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="container_items_67">
          <div className="items_67">
            <div className="title_67">
              <p>Vật phẩm</p>
            </div>
            <div className="items_info_67">
              <span>
                <p>Mã vật phẩm</p>
                <div className="dropdown_id_items">
                  <input className="id_items_focus" type="text" placeholder="" />
                </div>
                <p>Tên vật phẩm</p>
                <div className="dropdown_name_items">
                  <input className="name_items_focus" type="text" placeholder="" />
                  {/* <div className="name_items_67">
                    <p>Coca Cola</p>
                    <p>Snack</p>
                    <p>Mì Gói</p>
                  </div> */}
                </div>
              </span>
              <span>
                <p>Số lượng</p>
                <input type="text" placeholder="" />
                <p>Giá bán</p>
                <input type="text" placeholder="" />
              </span>
            </div>
            <div className="btn_insert_delete">
              <button className="btn_insert_67" type="submit">
                Thêm
              </button>
              <button className="btn_delete_67" type="submit">
                Xóa
              </button>
            </div>
          </div>
        </div>
        <div className="footer_67">
          <button type="submit">Lưu hóa đơn</button>
        </div>
      </div>
    </div>
  );
};

export default AddBillModal;
