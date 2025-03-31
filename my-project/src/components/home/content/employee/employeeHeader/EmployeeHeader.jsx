const EmployeeHeader = ({ onSetShowAddEmployeeModal }) => {
  return (
    <div className="NhanVien_NhanVien_Header_16">
      <h2>Danh sách nhân viên</h2>
      <div className="NhanVien_Search_16">
        <div className="Search_16">
          <ion-icon name="search-outline"></ion-icon>
          <input type="text" placeholder="Tìm theo mã, tên nhân viên" />
        </div>
        <div className="NhanVien_btn_16">
          <button onClick={() => onSetShowAddEmployeeModal(true)}>
            <i className="fa-solid fa-plus"></i>Nhân Viên
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHeader;
