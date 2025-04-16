import { deleteCustomer } from "../../../../../callAPI/customerAPI";
import { useSelector } from "react-redux";

const CustomerHeader = ({
  firstStateListCustomerFromParent,
  listDeleteCustomerFromParent,
  onSetListCustomer,
  onSetShowAddCustomerModal,
}) => {
  const userLogin = useSelector((state) => state.user?.currentUser);
  const handleDeleteCustomer = async () => {
    await Promise.all(
      listDeleteCustomerFromParent.map((customerID) =>
        deleteCustomer(customerID)
      )
    );
    onSetListCustomer((pre) =>
      pre.filter((item) => !listDeleteCustomerFromParent.includes(item._id))
    );
  };

  const handleSearchCustomer = (e) => {
    onSetListCustomer(() => {
      return [...firstStateListCustomerFromParent];
    });
    onSetListCustomer((pre) => {
      let temp = pre.filter(
        (item) =>
          item.customerId.startsWith(e.target.value) ||
          item.name.startsWith(e.target.value) ||
          item.phone.startsWith(e.target.value)
      );
      return [...temp];
    });
  };
  return (
    <div className="KhachHang_KhachHang_Header_16">
      <h2>Danh sách khách hàng</h2>
      <div className="KhachHang_Search_16">
        <div className="Search_16">
          <ion-icon name="search-outline"></ion-icon>
          <input
            type="text"
            placeholder="Tìm theo mã, tên, số điện thoại"
            onChange={handleSearchCustomer}
          />
        </div>
        {userLogin.manager ? (
          <div className="KhachHang_btn_16">
            <button
              style={{ backgroundColor: "red" }}
              onClick={handleDeleteCustomer}
            >
              Xóa
            </button>
          </div>
        ) : (
          <></>
        )}

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
