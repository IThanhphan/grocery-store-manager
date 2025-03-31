const WorkScheduleHeader = () => {
  return (
    <div className="LichLamViec_Header_16">
      <h2>Lịch làm việc</h2>
      <form className="LichLamViec_Search_16">
        <input type="search" placeholder="Tìm kiếm nhân viên" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </form>
      <input type="date" />
      <button>Tuần này</button>
    </div>
  );
};

export default WorkScheduleHeader;
