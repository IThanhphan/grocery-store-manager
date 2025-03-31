const AddEmployeeModal = ({ onSetShowAddEmployeeModal }) => {
  return (
    <div className="NhanVien_Overlay_16">
      <div className="NhanVien_ThemNhanVien_16">
        <div className="ThemNhanVien_Header_16">
          <h2>Thêm mới nhân viên</h2>
          <button className="ThemNhanVien_Close_16" onClick={() => onSetShowAddEmployeeModal(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="ThemNhanVien_Content_16">
          <div className="ThemNhanVien_info_16">
            <div className="ThemNhanVien_avatar_16">
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
            <div className="ThemNhanVien_form_16">
              <div className="ThemNhanVien_input_16">
                <label>Mã nhân viên</label>
                <input
                  type="text"
                  placeholder="Mã nhân viên tự động"
                  disabled
                />
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Mã chấm công</label> 
                <input type="text" />
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Tên nhân viên</label>
                <input type="text" />
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Số điện thoại</label>
                <input type="text" />
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Địa chỉ</label>
                <input type="text" />
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Giới tính</label>
                <select>
                  <option>Nam</option>
                  <option>Nữ</option>
                </select>
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Số CCCD</label>
                <input type="text" />
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Mức lương</label>
                <input type="text" />
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Ghi chú</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className="ThemNhanVien_popup_footer_16">
          <button className="ThemNhanVien_save_16">Lưu</button>
          <button className="ThemNhanVien_cancel_16" onClick={() => onSetShowAddEmployeeModal(false)}>Bỏ qua</button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
