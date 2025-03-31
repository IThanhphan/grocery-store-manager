const AddWorkScheduleModal = () => {
  return (
    <div className="NhanVien_LichLamViec_Overlay_16">
      <div className="LichLamViec_ThemCa_16">
        <div className="LichLamViec_ThemCa_Header_16">
          <h6>Thêm ca làm việc</h6>
          <button className="LichLamViec_ThemCa_Close_16">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="LichLamViec_ThemCa_Body_16">
          <div className="ThemCa_Name_16">
            <label>Tên:</label>
            <span className="ThemCa_TenNV_16">Khang</span>
          </div>
          <div className="ThemCa_NgayLam_16">
            <label>Ngày làm việc:</label>
            <input
              type="text"
              id="ngayLamViec"
              value="Thứ 2, 24/3/2025"
              readOnly
            />
          </div>
          <div className="ThemCa_GioLam_16">
            <label>Giờ làm việc:</label>
            <div className="ThemCa_Time_16">
              <select>
                <option>06:00</option>
                <option>06:30</option>
                <option>07:00</option>
                <option>07:30</option>
                <option>08:00</option>
                <option>08:30</option>
                <option>09:00</option>
                <option>09:30</option>
                <option>10:00</option>
                <option>10:30</option>
                <option>11:00</option>
                <option>11:30</option>
                <option>12:00</option>
                <option>12:30</option>
                <option>13:00</option>
                <option>13:30</option>
                <option>14:00</option>
                <option>14:30</option>
                <option>15:00</option>
                <option>15:30</option>
                <option>16:00</option>
                <option>16:30</option>
                <option>17:00</option>
                <option>17:30</option>
                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
                <option>21:30</option>
                <option>22:00</option>
              </select>
              <span>Đến</span>
              <select>
                <option>06:00</option>
                <option>06:30</option>
                <option>07:00</option>
                <option>07:30</option>
                <option>08:00</option>
                <option>08:30</option>
                <option>09:00</option>
                <option>09:30</option>
                <option>10:00</option>
                <option>10:30</option>
                <option>11:00</option>
                <option>11:30</option>
                <option>12:00</option>
                <option>12:30</option>
                <option>13:00</option>
                <option>13:30</option>
                <option>14:00</option>
                <option>14:30</option>
                <option>15:00</option>
                <option>15:30</option>
                <option>16:00</option>
                <option>16:30</option>
                <option>17:00</option>
                <option>17:30</option>
                <option>18:00</option>
                <option>18:30</option>
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
                <option>21:00</option>
                <option>21:30</option>
                <option>22:00</option>
              </select>
            </div>
          </div>
          <div className="ThemCa_Footer_16">
            <button className="ThemCa_Save_16">Lưu</button>
            <button className="ThemCa_Cancel_16">Hủy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWorkScheduleModal;
