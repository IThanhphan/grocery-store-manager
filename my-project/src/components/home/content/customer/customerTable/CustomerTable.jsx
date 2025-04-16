import { useState, useEffect } from "react";

const CustomerTable = ({
  listDeleteCustomerFromParent,
  listCustomerFromParent,
  onSetListDeleteCustomer,
  onSetShowAddCustomerModal,
}) => {
  const [listCustomer, setListCustomer] = useState([]);
  useEffect(() => {
    if (!listCustomerFromParent || !Array.isArray(listCustomerFromParent))
      return;
    const temp = listCustomerFromParent.map((item) => ({
      CustomerInfo: item,
      showCustomerInfo: false,
    }));
    setListCustomer(temp);
  }, [listCustomerFromParent]);

  const handleShowCustomerInfo = (customer, e) => {
    if (e.target.tagName === "INPUT") return;
    setListCustomer((pre) => {
      customer.showCustomerInfo = !customer.showCustomerInfo;
      return [...pre];
    });
  };

  const handleCheckCustomer = (customerId) => {
    onSetListDeleteCustomer((prev) =>
      prev.includes(customerId)
        ? prev.filter((id) => id !== customerId)
        : [...prev, customerId]
    );
  };

  const handleCheckAllCustomers = (e) => {
    if (e.target.checked) {
      onSetListDeleteCustomer(listCustomerFromParent.map((p) => p._id));
    } else {
      onSetListDeleteCustomer([]);
    }
  };

  console.log(listCustomerFromParent);
  return (
    <div className="KhachHang_Table_16">
      <div className="KhachHang_Header_16">
        <div className="KhachHang_Item_16">
          <input type="checkbox" onChange={handleCheckAllCustomers} />
        </div>
        <div className="KhachHang_Item_16">Mã khách hàng</div>
        <div className="KhachHang_Item_16">Tên khách hàng</div>
        <div className="KhachHang_Item_16">Số điện thoại</div>
        <div className="KhachHang_Item_16">Tổng bán</div>
      </div>

      {listCustomerFromParent ? (
        listCustomer.map((customer) => (
          <>
            <div
              className="KhachHang_Row_Display_16"
              onClick={(e) => handleShowCustomerInfo(customer, e)}
            >
              <div className="KhachHang_Row_16">
                <div className="KhachHang_Item_16">
                  <input
                    type="checkbox"
                    onChange={() =>
                      handleCheckCustomer(customer.CustomerInfo._id)
                    }
                    checked={listDeleteCustomerFromParent.includes(
                      customer.CustomerInfo._id
                    )}
                  />
                </div>
                <div className="KhachHang_Item_16">
                  {customer.CustomerInfo.customerId}
                </div>
                <div className="KhachHang_Item_16">
                  {customer.CustomerInfo.name}
                </div>
                <div className="KhachHang_Item_16">
                  {customer.CustomerInfo.phone}
                </div>
                <div className="KhachHang_Item_16">1,000,000 VNĐ</div>
              </div>
            </div>
            {customer.showCustomerInfo ? (
              <div className="KhachHang_ChiTietKhachHang_16">
                <div className="KhachHang_ChiTiet_16">
                  <div className="KhachHang_HinhAnh_16">
                    <img src="/image" alt="Ảnh khách hàng" />
                  </div>
                  <div className="KhachHang_ThongTin_16">
                    <div className="KhachHang_ThongTin_16">
                      <div className="KhachHang_Cot_16">
                        <div className="KhachHang_Item_16">
                          <strong>Mã khách hàng:</strong>{" "}
                          <input
                            type="text"
                            value={customer.CustomerInfo.customerId}
                          />
                        </div>
                        <div className="KhachHang_Item_16">
                          <strong>Tên khách hàng:</strong>{" "}
                          <input
                            type="text"
                            value={customer.CustomerInfo.name}
                          />
                        </div>
                        <div className="KhachHang_Item_16">
                          <strong>Số điện thoại:</strong>{" "}
                          <input
                            type="tel"
                            value={customer.CustomerInfo.phone}
                          />
                        </div>
                        <div className="KhachHang_Item_16">
                          <strong>Ngày sinh:</strong>{" "}
                          <input
                            type="date"
                            value={
                              new Date(customer.CustomerInfo.dob)
                                .toISOString()
                                .split("T")[0]
                            }
                          />
                        </div>
                        <div className="KhachHang_Item_16">
                          <strong>Giới tính:</strong>
                          <select
                            value={customer.CustomerInfo.gender ? "Nam" : "Nữ"}
                          >
                            <option>Nam</option>
                            <option>Nữ</option>
                          </select>
                        </div>
                        <div className="KhachHang_Item_16">
                          <strong>Địa chỉ:</strong>{" "}
                          <input
                            type="text"
                            value={customer.CustomerInfo.address}
                          />
                        </div>
                        <div className="KhachHang_Item_16">
                          <strong>Loại khách:</strong>
                          <select>
                            <option>Cá nhân</option>
                            <option>Công ty</option>
                          </select>
                        </div>
                        <div className="KhachHang_Item_16">
                          <strong>Công ty:</strong>{" "}
                          <input
                            type="text"
                            value={customer.CustomerInfo.company}
                          />
                        </div>
                        <div className="KhachHang_Item_16">
                          <strong>CCCD:</strong>{" "}
                          <input
                            type="text"
                            value={customer.CustomerInfo.identityNumber}
                          />
                        </div>
                        <div className="KhachHang_Item_16">
                          <strong>Email:</strong>{" "}
                          <input
                            type="email"
                            value={customer.CustomerInfo.email}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="KhachHang_GhiChu_16">
                      <strong>Ghi chú:</strong>{" "}
                      <textarea value={customer.CustomerInfo.note}></textarea>
                    </div>
                  </div>

                  <div className="KhachHang_HanhDong_16">
                    <button className="KhachHang_btn-luu_16">Lưu</button>
                    <button className="KhachHang_btn-xoa_16">Xóa</button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        ))
      ) : (
        <div className="KhachHang_Empty_16">
          <i className="fa-solid fa-user"></i>
          <p>Chưa có khách hàng.</p>
          <p>
            Nhấn{" "}
            <a
              href="#"
              id="ThemKhachHang_Link_16"
              onClick={() => onSetShowAddCustomerModal(true)}
            >
              vào đây
            </a>{" "}
            để thêm mới khách hàng.
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomerTable;
