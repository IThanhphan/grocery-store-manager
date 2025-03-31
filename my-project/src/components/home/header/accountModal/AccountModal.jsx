const AccountModal = ({ onShowAccountBox }) => {
  const handleCloseAccountBox = () => {
    onShowAccountBox(false);
  }
  return (
    <div id="accountModal" className="modal_78">
      <div className="modal-content_78">
        <span className="close_78" onClick={handleCloseAccountBox}>&times;</span>
        <h2 style={{ margin: "15px 0px 8px 18px" }}>Người dùng</h2>
        <div className="khung_78">
          <div className="trai_78">
            <div className="form-group_78">
              <label>Tên người dùng</label>
              <input type="text" value="" readOnly />
            </div>
            <div className="form-group_78">
              <label>Tên đăng nhập</label>
              <input type="text" value="" readOnly />
            </div>
            <div className="form-group_78">
              <label>Vai trò</label>
              <input type="text" value="" readOnly />
            </div>
            <div className="form-group_78">
              <label>Điện thoại</label>
              <input type="text" value="" readOnly />
            </div>
            <div className="form-group_78">
              <label>Ngày sinh</label>
              <input type="date" />
            </div>
            <div className="form-group_78">
              <label>Email</label>
              <input type="email" />
            </div>
          </div>
          <div className="phai_78">
            <div className="form-group_78">
              <label>Địa chỉ</label>
              <input type="text" />
            </div>
            <div className="form-group_78">
              <label>Khu vực</label>
              <select id="province-select">
                <option value="">Chọn tỉnh/thành</option>
                <option value="Hanoi">Hà Nội</option>

                <option value="HoaBinh">Hòa Bình</option>
                <option value="QuangNinh">Quảng Ninh</option>
                <option value="NamDinh">Nam Định</option>
                <option value="ThanhHoa">Thanh Hóa</option>
                <option value="NgheAn">Nghệ An</option>
                <option value="HaTinh">Hà Tĩnh</option>
                <option value="QuangTri">Quảng Trị</option>
                <option value="ThuaThienHue">Thừa Thiên Huế</option>
                <option value="DaNang">Đà Nẵng</option>
                <option value="QuangNam">Quảng Nam</option>
                <option value="PhuYen">Phú Yên</option>
                <option value="KhanhHoa">Khánh Hòa</option>
                <option value="LamDong">Lâm Đồng</option>
                <option value="BaRiaVungTau">Bà Rịa - Vũng Tàu</option>
                <option value="HoChiMinh">TP. Hồ Chí Minh</option>
              </select>
            </div>
            <div className="form-group_78">
              <label>Thành Phố</label>
              <select id="ward-select">
                <option value="">Chọn thành phố</option>
                <optgroup label="Hà Nội">
                  <option value="Hanoi">Hà Nội</option>
                </optgroup>

                <optgroup label="Hòa Bình">
                  <option value="HoaBinh">Hòa Bình</option>
                </optgroup>

                <optgroup label="Quảng Ninh">
                  <option value="HaLong">Hạ Long</option>
                  <option value="CamPha">Cẩm Phả</option>
                  <option value="UongBi">Uông Bí</option>
                  <option value="MongCai">Móng Cái</option>
                </optgroup>
                <optgroup label="Nam Định">
                  <option value="NamDinh">Nam Định</option>
                </optgroup>

                <optgroup label="Thanh Hóa">
                  <option value="ThanhHoa">Thanh Hóa</option>
                  <option value="BimSon">Bỉm Sơn</option>
                  <option value="SamSon">Sầm Sơn</option>
                </optgroup>
                <optgroup label="Nghệ An">
                  <option value="Vinh">Vinh</option>
                  <option value="ThaiHoa">Thái Hòa</option>
                </optgroup>
                <optgroup label="Hà Tĩnh">
                  <option value="HaTinh">Hà Tĩnh</option>
                  <option value="HongLinh">Hồng Lĩnh</option>
                  <option value="KyAnh">Kỳ Anh</option>
                </optgroup>

                <optgroup label="Quảng Trị">
                  <option value="DongHa">Đông Hà</option>
                </optgroup>
                <optgroup label="Thừa Thiên Huế">
                  <option value="Hue">Huế</option>
                </optgroup>
                <optgroup label="Đà Nẵng">
                  <option value="DaNang">Đà Nẵng</option>
                </optgroup>
                <optgroup label="Quảng Nam">
                  <option value="TamKy">Tam Kỳ</option>
                  <option value="HoiAn">Hội An</option>
                </optgroup>
                <optgroup label="Phú Yên">
                  <option value="TuyHoa">Tuy Hòa</option>
                </optgroup>
                <optgroup label="Khánh Hòa">
                  <option value="NhaTrang">Nha Trang</option>
                  <option value="CamRanh">Cam Ranh</option>
                </optgroup>
                <optgroup label="Lâm Đồng">
                  <option value="DaLat">Đà Lạt</option>
                  <option value="BaoLoc">Bảo Lộc</option>
                </optgroup>
                <optgroup label="Bà Rịa - Vũng Tàu">
                  <option value="VungTau">Vũng Tàu</option>
                  <option value="BaRia">Bà Rịa</option>
                </optgroup>
                <optgroup label="TP. Hồ Chí Minh">
                  <option value="HoChiMinh">TP. Hồ Chí Minh</option>
                </optgroup>
              </select>
            </div>
            <div className="form-group_78">
              <label>Ghi chú</label>
              <textarea></textarea>
            </div>
          </div>
        </div>
        <div className="modal-footer_78">
          <button className="save-btn">
            <i className="fa-solid fa-floppy-disk"></i>Lưu (F9)
          </button>
          <button className="cancel-btn">
            <i className="fa-solid fa-ban"></i>Bỏ qua
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
