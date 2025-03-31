const TimekeepingHeader = () => {
  return (
    <div className="ChamCong_Header_16">
      <h2>Bảng chấm công</h2>
      <form className="ChamCong_Search_16">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Tìm kiếm nhân viên" />
        <button>
          <i className="fa-solid fa-caret-down"></i>
        </button>
      </form>
      <button className="ChamCong_TuanNay">Tuần này</button>
      <input type="date" />
    </div>
  );
};

export default TimekeepingHeader;
