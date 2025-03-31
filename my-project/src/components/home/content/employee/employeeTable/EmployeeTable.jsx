const EmployeeTable = ({ employeeListFromParent, onSetShowAddEmployeeModal }) => {
  return (
    <div className="NhanVien_Table_16">
      <div className="NhanVien_Header_16">
        <div className="NhanVien_Item_16">
          <input type="checkbox" />
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
        employeeListFromParent.map(() => (
          <>
            <div className="NhanVien_Row_Display_16">
              <div className="NhanVien_Row_16">
                <div className="NhanVien_Item_16">
                  <input type="checkbox" />
                </div>
                <div className="NhanVien_Item_16">NV00002</div>
                <div className="NhanVien_Item_16">MC0002</div>
                <div className="NhanVien_Item_16">Liêm</div>
                <div className="NhanVien_Item_16">0173565938</div>
                <div className="NhanVien_Item_16">Nam</div>
                <div className="NhanVien_Item_16">
                  44 Trần Phú, Lộc Thọ, Nha Trang
                </div>
                <div className="NhanVien_Item_16">123456789</div>
                <div className="NhanVien_Item_16">500,000 VNĐ</div>
                <div className="NhanVien_Item_16">Không có</div>
              </div>
            </div>
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
                        <input type="text" value="NV00002" />
                      </div>
                      <div className="NhanVien_Item_16">
                        <strong>Tên nhân viên:</strong>{" "}
                        <input type="text" value="Liêm" />
                      </div>
                      <div className="NhanVien_Item_16">
                        <strong>Mã chấm công:</strong>{" "}
                        <input type="text" value="MC0002" />
                      </div>
                      <div className="NhanVien_Item_16">
                        <strong>Ngày sinh:</strong> <input type="date" />
                      </div>
                      <div className="NhanVien_Item_16">
                        <strong>Giới tính:</strong>
                        <select>
                          <option>Nam</option>
                          <option>Nữ</option>
                        </select>
                      </div>
                      <div className="NhanVien_Item_16">
                        <strong>Số CMND/CCCD:</strong>{" "}
                        <input type="text" value="123456789" />
                      </div>
                    </div>
                    <div className="NhanVien_Cot_16">
                      <div className="NhanVien_Item_16">
                        <strong>Ngày bắt đầu làm việc:</strong>{" "}
                        <input type="date" />
                      </div>
                      <div className="NhanVien_Item_16">
                        <strong>Tài khoản KiotViet:</strong>{" "}
                        <input type="text" />
                      </div>
                      <div className="NhanVien_Item_16">
                        <strong>Số điện thoại:</strong>{" "}
                        <input type="tel" value="0173565938" />
                      </div>
                      <div className="NhanVien_Item_16">
                        <strong>Email:</strong> <input type="email" />
                      </div>
                      <div className="NhanVien_Item_16">
                        <strong>Facebook:</strong> <input type="text" />
                      </div>
                      <div className="NhanVien_Item_16">
                        <strong>Địa chỉ:</strong> <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="NhanVien_GhiChu_16">
                    <strong>Ghi chú:</strong> <textarea></textarea>
                  </div>
                </div>

                <div className="NhanVien_HanhDong_16">
                  <button className="NhanVien_btn-luu_16">Lưu</button>
                  <button className="NhanVien_btn-xoa_16">Xóa</button>
                </div>
              </div>
            </div>
          </>
        ))
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
