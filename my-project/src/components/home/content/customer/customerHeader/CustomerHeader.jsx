import { deleteCustomer } from "../../../../../callAPI/customerAPI";

const CustomerHeader = ({
  listDeleteCustomerFromParent,
  onSetListCustomer,
  onSetShowAddCustomerModal,
}) => {
  const handleDeleteCustomer = async () => {
    await Promise.all(
      listDeleteCustomerFromParent.map((customerID) => deleteCustomer(customerID))
    );
    onSetListCustomer((pre) =>
      pre.filter((item) => !listDeleteCustomerFromParent.includes(item._id))
    );
  };
  return (
    <div className="KhachHang_KhachHang_Header_16">
      <h2>Danh sách khách hàng</h2>
      <div className="KhachHang_Search_16">
        <div className="Search_16">
          <ion-icon name="search-outline"></ion-icon>
          <input type="text" placeholder="Tìm theo mã, tên, điện thoại" />
        </div>
        <div className="KhachHang_btn_16">
          <button style={{ backgroundColor: "red" }} onClick={handleDeleteCustomer}>
            Xóa
          </button>
        </div>
        <div className="KhachHang_btn_16">
          <button onClick={() => onSetShowAddCustomerModal(true)}>
            <i className="fa-solid fa-plus"></i>Khách hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerHeader;
