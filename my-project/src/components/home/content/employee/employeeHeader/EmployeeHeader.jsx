import { deleteUser } from "../../../../../callAPI/authAPI";

const EmployeeHeader = ({
  firstStateEmployeeListFromParent,
  listDeleteUserFromParent,
  onSetEmployeeList,
  onSetShowAddEmployeeModal,
}) => {
  const handleDeleteUser = async () => {
    await Promise.all(
      listDeleteUserFromParent.map((userID) => deleteUser(userID))
    );
    onSetEmployeeList((pre) =>
      pre.filter((item) => !listDeleteUserFromParent.includes(item._id))
    );
  };

  const handleSearchEmployee = (e) => {
    onSetEmployeeList(() => {
      return [...firstStateEmployeeListFromParent]
    });
    onSetEmployeeList((pre) => {
      let temp = pre.filter(
        (item) =>
          item.userId.startsWith(e.target.value) ||
          item.name.startsWith(e.target.value) ||
          item.phone.startsWith(e.target.value)
      );
      return [...temp];
    });
  };
  return (
    <div className="NhanVien_NhanVien_Header_16">
      <h2>Danh sách nhân viên</h2>
      <div className="NhanVien_Search_16">
        <div className="Search_16">
          <ion-icon name="search-outline"></ion-icon>
          <input type="text" placeholder="Tìm theo mã, tên, số điện thoại" onChange={handleSearchEmployee}/>
        </div>
        <div className="NhanVien_btn_16">
          <button style={{ backgroundColor: "red" }} onClick={handleDeleteUser}>
            Xóa
          </button>
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
