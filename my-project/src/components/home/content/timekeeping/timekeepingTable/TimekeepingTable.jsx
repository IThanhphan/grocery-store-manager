const TimekeepingTable = ({ employeeListFromParent, onSetShowTimekeepingModal }) => {
  return (
    <div className="ChamCong_Display_16">
      <div className="ChamCong_Body_16">
        <div className="ChamCong_Body_16">
          <div className="ChamCong_Body_Header_16">
            <div className="ChamCong_Header_item_16">Ca làm việc</div>
            <div className="ChamCong_Header_item_16">
              Thứ 2 <br />
              <span>17/3</span>
            </div>
            <div className="ChamCong_Header_item_16">
              Thứ 3 <br />
              <span>18/3</span>
            </div>
            <div className="ChamCong_Header_item_16">
              Thứ 4 <br />
              <span>19/3</span>
            </div>
            <div className="ChamCong_Header_item_16">
              Thứ 5 <br />
              <span>20/3</span>
            </div>
            <div className="ChamCong_Header_item_16 ChamCong_today">
              Thứ 6 <br />
              <span>21/3</span>
            </div>
            <div className="ChamCong_Header_item_16">
              Thứ 7 <br />
              <span>22/3</span>
            </div>
            <div className="ChamCong_Header_item_16">
              Chủ nhật <br />
              <span>23/3</span>
            </div>
          </div>

          {employeeListFromParent.map((item) => (
            <div className="ChamCong_Row_16">
              <div className="ChamCong_Item_16">
                <b>{item.name}</b>
              </div>

              {/* <!-- Đủ ca --> */}
              <div className="ChamCong_Item_16" onClick={() => onSetShowTimekeepingModal(true)}>
                <span className="ChamCong_Time_16">7:00-15:00</span>
                <br />
                <span className="ChamCong_Status ChamCong_DuCa_16">Đủ ca</span>
                <br />
                <span className="ChamCong_Status ChamCong_TreCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_Thoigiantre_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_BoCa_16"></span>
                <span className="ChamCong_Status ChamCong_KhongCoCa_16"></span>
              </div>

              {/* <!-- Trễ ca --> */}
              <div className="ChamCong_Item_16" onClick={() => onSetShowTimekeepingModal(true)}>
                <span className="ChamCong_Time_16">7:00-15:00</span>
                <br />
                <span className="ChamCong_Status ChamCong_DuCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_TreCa_16">
                  Trễ ca
                </span>
                <br />
                <span className="ChamCong_Status ChamCong_Thoigiantre_16">
                  (15 phút)
                </span>
                <br />
                <span className="ChamCong_Status ChamCong_BoCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_KhongCoCa_16"></span>
              </div>

              {/* <!-- Không có ca --> */}
              <div className="ChamCong_Item_16" onClick={() => onSetShowTimekeepingModal(true)}>
                <span className="ChamCong_Time_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_DuCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_TreCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_Thoigiantre_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_BoCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_KhongCoCa_16">
                  Không có ca
                </span>
              </div>
              <div className="ChamCong_Item_16" onClick={() => onSetShowTimekeepingModal(true)}>
                <span className="ChamCong_Time_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_DuCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_TreCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_Thoigiantre_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_BoCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_KhongCoCa_16">
                  Không có ca
                </span>
              </div>
              <div className="ChamCong_Item_16" onClick={() => onSetShowTimekeepingModal(true)}>
                <span className="ChamCong_Time_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_DuCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_TreCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_Thoigiantre_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_BoCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_KhongCoCa_16">
                  Không có ca
                </span>
              </div>
              <div className="ChamCong_Item_16" onClick={() => onSetShowTimekeepingModal(true)}>
                <span className="ChamCong_Time_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_DuCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_TreCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_Thoigiantre_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_BoCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_KhongCoCa_16">
                  Không có ca
                </span>
              </div>
              <div className="ChamCong_Item_16" onClick={() => onSetShowTimekeepingModal(true)}>
                <span className="ChamCong_Time_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_DuCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_TreCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_Thoigiantre_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_BoCa_16"></span>
                <br />
                <span className="ChamCong_Status ChamCong_KhongCoCa_16">
                  Không có ca
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimekeepingTable;
