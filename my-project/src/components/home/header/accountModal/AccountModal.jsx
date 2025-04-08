import { useSelector } from "react-redux";

const AccountModal = ({ onShowAccountBox }) => {
  const userLogin = useSelector((state) => state.user?.currentUser);
  return (
    <div id="accountModal" className="modal_78">
      <div className="modal-content_78">
        <span className="close_78" onClick={() => onShowAccountBox(false)}>&times;</span>
        <h2 style={{ margin: "15px 0px 8px 18px" }}>Người dùng</h2>
        <div className="khung_78">
          <div className="trai_78">
            <div className="form-group_78">
              <label>Tên đăng nhập</label>
              <input type="text" value={userLogin?.name} readOnly />
            </div>
            <div className="form-group_78">
              <label>Điện thoại</label>
              <input type="text" value={userLogin?.phone} readOnly />
            </div>
            <div className="form-group_78">
              <label>Ngày sinh</label>
              <input type="date" value={new Date(userLogin?.dob).toISOString().split("T")[0]} />
            </div>
          </div>
          <div className="phai_78">
          <div className="form-group_78">
              <label>Vai trò</label>
              <input type="text" value={userLogin?.manager ? "Quản lý" : "Nhân viên"} readOnly />
            </div>
            <div className="form-group_78">
              <label>Địa chỉ</label>
              <input type="text" value={userLogin?.address} />
            </div>
            <div className="form-group_78">
              <label>Email</label>
              <input type="email" value={userLogin?.email} />
            </div>
          </div>
        </div>
        <div className="modal-footer_78">
          <button className="save-btn">
            <i className="fa-solid fa-floppy-disk"></i>Lưu (F9)
          </button>
          <button className="cancel-btn" onClick={() => onShowAccountBox(false)}>
            <i className="fa-solid fa-ban"></i>Bỏ qua
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
