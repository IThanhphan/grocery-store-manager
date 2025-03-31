const WorkScheduleTable = ({ employeeListOfParent }) => {
  return (
    <div className="LichLamViec_Display_16">
      <div className="LichLamViec_Body_16">
        {/* <!-- Hàng tiêu đề --> */}
        <div className="LichLamViec_HeaderRow_16">
          <div className="LichLamViec_Cell_Header_16">Nhân viên</div>
          <div className="LichLamViec_Cell_Header_16">
            <div className="LichLamViec_Thu_16">Thứ 2</div>
            <div className="LichLamViec_Ngay_16">24/3</div>
          </div>
          <div className="LichLamViec_Cell_Header_16">
            <div className="LichLamViec_Thu_16">Thứ 3</div>
            <div className="LichLamViec_Ngay_16">25/3</div>
          </div>
          <div className="LichLamViec_Cell_Header_16">
            <div className="LichLamViec_Thu_16">Thứ 4</div>
            <div className="LichLamViec_Ngay_16">26/3</div>
          </div>
          <div className="LichLamViec_Cell_Header_16">
            <div className="LichLamViec_Thu_16">Thứ 5</div>
            <div className="LichLamViec_Ngay_16 LichLamViec_today">27/3</div>
          </div>
          <div className="LichLamViec_Cell_Header_16">
            <div className="LichLamViec_Thu_16">Thứ 6</div>
            <div className="LichLamViec_Ngay_16">28/3</div>
          </div>
          <div className="LichLamViec_Cell_Header_16">
            <div className="LichLamViec_Thu_16">Thứ 7</div>
            <div className="LichLamViec_Ngay_16">29/3</div>
          </div>
          <div className="LichLamViec_Cell_Header_16">
            <div className="LichLamViec_Thu_16">Chủ nhật</div>
            <div className="LichLamViec_Ngay_16">30/3</div>
          </div>
        </div>

        {/* <!-- Dòng dữ liệu --> */}
        {employeeListOfParent.map((item) => (
          <div className="LichLamViec_Row_16">
            <div className="LichLamViec_Cell_Name_16">
              <b>{item.name}</b>
              <br />
              {item.employeeId}
            </div>
            <div className="LichLamViec_Cell_16">
              <span className="LichLamViec_Shift_16">7:00 - 15:00</span>
              <button className="LichLamViec_AddShift_16">+ Thêm ca</button>
            </div>
            <div className="LichLamViec_Cell_16">
              <span className="LichLamViec_Shift_16">9:00 - 17:00</span>
              <button className="LichLamViec_AddShift_16">+ Thêm ca</button>
            </div>
            <div className="LichLamViec_Cell_16">
              <span className="LichLamViec_Shift_16">13:00 - 21:00</span>
              <button className="LichLamViec_AddShift_16">+ Thêm ca</button>
            </div>
            <div className="LichLamViec_Cell_16">
              <span className="LichLamViec_Shift_16">7:00 - 15:00</span>
              <button className="LichLamViec_AddShift_16">+ Thêm ca</button>
            </div>
            <div className="LichLamViec_Cell_16">
              <span className="LichLamViec_Shift_16">9:00 - 17:00</span>
              <button className="LichLamViec_AddShift_16">+ Thêm ca</button>
            </div>
            <div className="LichLamViec_Cell_16">
              <span className="LichLamViec_Shift_16">13:00 - 21:00</span>
              <button className="LichLamViec_AddShift_16">+ Thêm ca</button>
            </div>
            <div className="LichLamViec_Cell_16">
              <span className="LichLamViec_Shift_16">7:00 - 15:00</span>
              <button className="LichLamViec_AddShift_16">+ Thêm ca</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkScheduleTable;
