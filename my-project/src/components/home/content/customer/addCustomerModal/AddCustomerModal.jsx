import { addNewCustomer } from "../../../../../callAPI/customerAPI";


const AddCustomerModal = ({
  customerModalFromParent,
  onSetCustomerModal,
  onSetShowAddCustomerModal,
}) => {
  const handleAddCustomer = async () => {
    await addNewCustomer(customerModalFromParent);
    onSetShowAddCustomerModal(false);
    onSetCustomerModal({
      name: "",
      gender: true,
      customerType: true,
      identityNumber: "",
      company: "",
      dob: "",
      address: "",
      phone: "",
      email: "",
      note: ""
    });
  }
  return (
    <div className="KhachHang_Overlay_16">
      <div className="KhachHang_ThemKhachHang_16">
        <div className="ThemKhachHang_Header_16">
          <h2>Thêm mới khách hàng</h2>
          <button
            className="ThemKhachHang_Close_16"
            onClick={() => onSetShowAddCustomerModal(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="ThemKhachHang_Content_16">
          <div className="ThemKhachHang_info_16">
            <div className="ThemKhachHang_avatar_16">
              {/* <!--Avatar chưa có gì thì img sẽ set thành none--> */}
              <div className="box_avatar_16">
                <img
                  src="avatar_image/404249776_1523370004868580_7093472687130616233_n.jpg"
                  alt=""
                />
                <span className="camera_icon_16">
                  <i className="fa-solid fa-camera"></i>
                </span>
              </div>
              <button className="upload_btn_16">Chọn ảnh</button>
            </div>
            <div className="ThemKhachHang_form_16">
              <div className="ThemKhachHang_input_16">
                <label>Mã khách hàng</label>
                <input
                  type="text"
                  placeholder="Mã khách hàng mặc định"
                  disabled
                />
              </div>
              <div className="ThemKhachHang_input_16">
                <label>Tên khách hàng</label>
                <input
                  type="text"
                  value={customerModalFromParent.name}
                  onChange={(e) => {
                    onSetCustomerModal((pre) => {
                      return {
                        ...pre,
                        name: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="ThemKhachHang_input_16">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  value={customerModalFromParent.phone}
                  onChange={(e) => {
                    onSetCustomerModal((pre) => {
                      return {
                        ...pre,
                        phone: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="ThemKhachHang_input_16">
                <label>Ngày sinh</label>
                <input
                  type="date"
                  value={customerModalFromParent.dob}
                  onChange={(e) => {
                    onSetCustomerModal((pre) => {
                      return {
                        ...pre,
                        dob: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="ThemKhachHang_input_16">
                <label>Giới tính</label>
                <select
                  value={customerModalFromParent.gender ? "Nam" : "Nữ"}
                  onChange={(e) => {
                    onSetCustomerModal((pre) => {
                      return {
                        ...pre,
                        gender: e.target.value === "Nam",
                      };
                    });
                  }}
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
              </div>
              <div className="ThemKhachHang_input_16">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  value={customerModalFromParent.address}
                  onChange={(e) => {
                    onSetCustomerModal((pre) => {
                      return {
                        ...pre,
                        address: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="ThemKhachHang_input_16">
                <label>Loại khách</label>
                <select
                  value={
                    customerModalFromParent.customerType ? "Cá nhân" : "Công ty"
                  }
                  onChange={(e) => {
                    onSetCustomerModal((pre) => {
                      return {
                        ...pre,
                        customerType: e.target.value === "Cá nhân",
                      };
                    });
                  }}
                >
                  <option value="Cá nhân">Cá nhân</option>
                  <option value="Công ty">Công ty</option>
                </select>
              </div>
              <div className="ThemKhachHang_input_16">
                <label>Công ty</label>
                <input
                  type="text"
                  disabled={customerModalFromParent.customerType}
                  value={customerModalFromParent.company}
                  onChange={(e) => {
                    onSetCustomerModal((pre) => {
                      return {
                        ...pre,
                        company: e.target.value
                      }
                    });
                  }}
                />
              </div>
              <div className="ThemKhachHang_input_16">
                <label>Số CCCD</label>
                <input type="text" value={customerModalFromParent.identityNumber} onChange={(e) => {
                  onSetCustomerModal((pre) => {
                    return {
                      ...pre,
                      identityNumber: e.target.value
                    }
                  });
                }}/>
              </div>
              <div className="ThemKhachHang_input_16">
                <label>Email</label>
                <input type="text" value={customerModalFromParent.email} onChange={(e) => {
                  onSetCustomerModal((pre) => {
                    return {
                      ...pre,
                      email: e.target.value
                    }
                  });
                }} />
              </div>
              <div className="ThemKhachHang_input_16">
                <label>Ghi chú</label>
                <input type="text" value={customerModalFromParent.note} onChange={(e) => {
                  onSetCustomerModal((pre) => {
                    return {
                      ...pre,
                      note: e.target.value
                    }
                  });
                }}/>
              </div>
            </div>
          </div>
        </div>
        <div className="ThemKhachHang_popup_footer_16">
          <button className="ThemKhachHang_save_16" onClick={handleAddCustomer}>Lưu</button>
          <button
            className="ThemKhachHang_cancel_16"
            onClick={() => onSetShowAddCustomerModal(false)}
          >
            Bỏ qua
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCustomerModal;
