import { useState } from "react";
import { addNewUser } from "../../../../../callAPI/authAPI";

const AddEmployeeModal = ({ onSetShowAddEmployeeModal }) => {
  const [userModal, setUserModal] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    dob: "",
    address: "",
    gender: true,
    citizenId: "",
    hourlyRate: "",
    note: ""
  });

  const handleAddNewUser = async () => {
    await addNewUser(userModal);
    onSetShowAddEmployeeModal(false);
    setUserModal({
      name: "",
      email: "",
      phone: "",
      password: "",
      dob: "",
      address: "",
      gender: true,
      citizenId: "",
      hourlyRate: "",
      note: ""
    });
  }
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
                <label>Tên nhân viên</label>
                <input type="text" value={userModal.name} onChange={(e) => {
                  setUserModal((pre) => {
                    return {
                      ...pre,
                      name: e.target.value
                    }
                  });
                }}/>
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Mật khẩu</label> 
                <input type="text" value={userModal.password} onChange={(e) => {
                  setUserModal((pre) => {
                    return {
                      ...pre,
                      password: e.target.value
                    }
                  })
                }}/>
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Số điện thoại</label>
                <input type="text" value={userModal.phone} onChange={(e) => {
                  setUserModal((pre) => {
                    return {
                      ...pre,
                      phone: e.target.value
                    }
                  });
                }}/>
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Email</label> 
                <input type="text" value={userModal.email} onChange={(e) => {
                  setUserModal((pre) => {
                    return {
                      ...pre,
                      email: e.target.value
                    }
                  });
                }}/>
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Địa chỉ</label>
                <input type="text" value={userModal.address} onChange={(e) => {
                  setUserModal((pre) => {
                    return {
                      ...pre,
                      address: e.target.value
                    }
                  });
                }}/>
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Ngày sinh</label> 
                <input type="date" value={userModal.dob} onChange={(e) => {
                  setUserModal((pre) => {
                    return {
                      ...pre,
                      dob: e.target.value
                    }
                  });
                }}/>
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Giới tính</label>
                <select
                  value={userModal.gender ? "Nam" : "Nữ"}
                  onChange={(e) => {
                    setUserModal((pre) => {
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
              <div className="ThemNhanVien_input_16">
                <label>Số CCCD</label>
                <input type="text" value={userModal.citizenId} onChange={(e) => {
                  setUserModal((pre) => {
                    return {
                      ...pre,
                      citizenId: e.target.value
                    }
                  });
                }}/>
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Mức lương</label>
                <input type="text" value={userModal.hourlyRate} onChange={(e) => {
                  setUserModal((pre) => {
                    return {
                      ...pre,
                      hourlyRate: e.target.value
                    }
                  });
                }}/>
              </div>
              <div className="ThemNhanVien_input_16">
                <label>Ghi chú</label>
                <input type="text" value={userModal.note} onChange={(e) => {
                  setUserModal((pre) => {
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
        <div className="ThemNhanVien_popup_footer_16">
          <button className="ThemNhanVien_save_16" onClick={handleAddNewUser}>Lưu</button>
          <button className="ThemNhanVien_cancel_16" onClick={() => onSetShowAddEmployeeModal(false)}>Bỏ qua</button>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
