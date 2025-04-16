const TimekeepingModal = ({ onSetShowTimekeepingModal }) => {
  return (
    <div className="ChamCong_Overlay_16">
      <div className="NhanVien_ThucHienChamCong_16">
        <div className="ThucHienChamCong_Header_16">
          <div className="ThucHienChamCong_Ten_16">
            <span>Khang</span>
            <span>Thứ 2,</span>
            <span>17/3/2025</span>
          </div>
          <div className="ThucHienChamCong_Close_16">
            <button className="ThucHienChamCong_Close_16" onClick={() => onSetShowTimekeepingModal(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <div className="ThucHienChamCong_Content_16">
          <div className="ThucHienChamCong_ThoiGianLam_16">
            <p>Ca làm: </p>
            <span className="ThucHienChamCong_Time_16">7:00-15:00</span>
          </div>
          <div className="ThucHienChamCong_XacNhan_16">
            <input
              type="radio"
              className="ThucHienChamCong_DuCa_16"
              id="duca"
              name="chamcong"
            />
            <label for="duca">Đủ ca</label>

            <input
              type="radio"
              className="ThucHienChamCong_TreCa"
              id="treca"
              name="chamcong"
            />
            <label for="treca">Trễ ca</label>

            <input
              type="radio"
              className="ThucHienChamCong_BoCa"
              id="boca"
              name="chamcong"
            />
            <label for="boca">Bỏ ca</label>
          </div>

          <div className="ThucHienChamCong_GhiChu_16">
            <label>Ghi chú:</label>
            <input type="text" placeholder="Thời gian trễ" />
          </div>
        </div>
        <div className="ThucHienChamCong_Footer_16">
          <button className="ThucHienChamCong_Save_16">Lưu</button>
          <button className="ThucHienChamCong_cancel_16"  onClick={() => onSetShowTimekeepingModal(false)}>Bỏ qua</button>
        </div>
      </div>
    </div>
  );
};

export default TimekeepingModal;
