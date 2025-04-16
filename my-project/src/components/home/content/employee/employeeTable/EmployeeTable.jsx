import { useState, useEffect } from "react";

const EmployeeTable = ({
  employeeListFromParent,
  listDeleteUserFromParent,
  onSetListDeleteUser,
  onSetShowAddEmployeeModal,
}) => {
  const [listEmployee, setListEmployee] = useState([]);
  useEffect(() => {
    if (!employeeListFromParent || !Array.isArray(employeeListFromParent))
      return;
    const temp = employeeListFromParent.map((item) => ({
      employeeInfo: item,
      showEmployeeInfo: false,
    }));
    setListEmployee(temp);
  }, [employeeListFromParent]);

  const handleShowEmployeeInfo = (employee, e) => {
    if (e.target.tagName === "INPUT") return;
    setListEmployee((pre) => {
      employee.showEmployeeInfo = !employee.showEmployeeInfo;
      return [...pre];
    });
  };

  const handleCheckUser = (userId) => {
    onSetListDeleteUser((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  const handleCheckAllUsers = (e) => {
    if (e.target.checked) {
      onSetListDeleteUser(employeeListFromParent.map((p) => p._id));
    } else {
      onSetListDeleteUser([]);
    }
  };

  return (
    <div className="NhanVien_Table_16">
      <div className="NhanVien_Header_16">
        <div className="NhanVien_Item_16">
          <input type="checkbox" onChange={handleCheckAllUsers} />
        </div>
        <div className="NhanVien_Item_16">Mã nhân viên</div>
        <div className="NhanVien_Item_16">Mã chấm công</div>
        <div className="NhanVien_Item_16">Tên nhân viên</div>
        <div className="NhanVien_Item_16">Số điện thoại</div>
        <div className="NhanVien_Item_16">Giới tính</div>
        <div className="NhanVien_Item_16">Địa chỉ</div>
        <div className="NhanVien_Item_16">Số CCCD</div>
        <div className="NhanVien_Item_16">Tiền lương</div>
        <div className="NhanVien_Item_16">Ghi chú</div>
      </div>

      {employeeListFromParent ? (
        listEmployee.map((employee) =>
          !employee.employeeInfo.manager ? (
            <>
              <div
                className="NhanVien_Row_Display_16"
                onClick={(e) => handleShowEmployeeInfo(employee, e)}
              >
                <div className="NhanVien_Row_16">
                  <div className="NhanVien_Item_16">
                    <input
                      type="checkbox"
                      onChange={() =>
                        handleCheckUser(employee.employeeInfo._id)
                      }
                      checked={listDeleteUserFromParent.includes(
                        employee.employeeInfo._id
                      )}
                    />
                  </div>
                  <div className="NhanVien_Item_16">
                    {employee.employeeInfo.userId}
                  </div>
                  <div className="NhanVien_Item_16">MC0002</div>
                  <div className="NhanVien_Item_16">
                    {employee.employeeInfo.name}
                  </div>
                  <div className="NhanVien_Item_16">
                    {employee.employeeInfo.phone}
                  </div>
                  <div className="NhanVien_Item_16">Nam</div>
                  <div className="NhanVien_Item_16">
                    {employee.employeeInfo.address}
                  </div>
                  <div className="NhanVien_Item_16">123456789</div>
                  <div className="NhanVien_Item_16">500,000 VNĐ</div>
                  <div className="NhanVien_Item_16">Không có</div>
                </div>
              </div>
              {employee.showEmployeeInfo ? (
                <div className="NhanVien_ChiTietNhanVien_16">
                  <div className="NhanVien_ChiTiet_16">
                    <div className="NhanVien_HinhAnh_16">
                      <img src="/image" alt="Ảnh nhân viên" />
                    </div>
                    <div className="NhanVien_ThongTin_16">
                      <div className="NhanVien_ThongTin_16">
                        <div className="NhanVien_Cot_16">
                          <div className="NhanVien_Item_16">
                            <strong>Mã nhân viên:</strong>{" "}
                            <input type="text" value={employee.employeeInfo.userId} />
                          </div>
                          <div className="NhanVien_Item_16">
                            <strong>Tên nhân viên:</strong>{" "}
                            <input type="text" value={employee.employeeInfo.name} />
                          </div>
                          <div className="NhanVien_Item_16">
                            <strong>Ngày sinh:</strong> <input type="date" value={employee.employeeInfo.dob.split("T")[0]} />
                          </div>
                          <div className="NhanVien_Item_16">
                            <strong>Giới tính:</strong>
                            <select value={employee.employeeInfo.gender ? "Name" : "Nữ"}>
                              <option value="Name">Nam</option>
                              <option value="Nữ">Nữ</option>
                            </select>
                          </div>
                          <div className="NhanVien_Item_16">
                            <strong>Số CMND/CCCD:</strong>{" "}
                            <input type="text" value={employee.employeeInfo.citizenId} />
                          </div>
                        </div>
                        <div className="NhanVien_Cot_16">
                          <div className="NhanVien_Item_16">
                            <strong>Ngày bắt đầu làm việc:</strong>{" "}
                            <input type="date" value={employee.employeeInfo.createdAt.split("T")[0]} />
                          </div>
                          <div className="NhanVien_Item_16">
                            <strong>Số điện thoại:</strong>{" "}
                            <input type="tel" value={employee.employeeInfo.phone} />
                          </div>
                          <div className="NhanVien_Item_16">
                            <strong>Email:</strong> <input type="email" value={employee.employeeInfo.email} />
                          </div>
                          <div className="NhanVien_Item_16">
                            <strong>Địa chỉ:</strong> <input type="text" value={employee.employeeInfo.address}/>
                          </div>
                        </div>
                      </div>
                      <div className="NhanVien_GhiChu_16">
                        <strong>Ghi chú:</strong> <textarea value={employee.employeeInfo.note}></textarea>
                      </div>
                    </div>

                    <div className="NhanVien_HanhDong_16">
                      <button className="NhanVien_btn-luu_16">Lưu</button>
                      <button className="NhanVien_btn-xoa_16">Xóa</button>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )
        )
      ) : (
        <div className="NhanVien_Empty_16">
          <i className="fa-solid fa-user"></i>
          <p>Chưa có nhân viên.</p>
          <p>
            Nhấn{" "}
            <a
              href="#"
              id="ThemNhanVien_Link_16"
              onClick={() => onSetShowAddEmployeeModal(true)}
            >
              vào đây
            </a>{" "}
            để thêm mới nhân viên.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;
