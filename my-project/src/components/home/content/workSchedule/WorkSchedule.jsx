import "./workSchedule.css";
import AddWorkScheduleModal from "./addWorkScheduleModal/AddWorkScheduleModal";
import WorkScheduleHeader from "./workScheduleHeader/WorkScheduleHeader";
import WorkScheduleTable from "./workScheduleTable/WorkScheduleTable";
import { getAllEmployee } from "../../../../callAPI/employeeAPI";
import { useState, useEffect } from "react";

const WorkSchedule = () => {
  const [employeeList, setEmployeeList] = useState(null);
  const [showAddWorkTable, setShowAddWorkTable] = useState(false);
  useEffect(() => {
    const fetchEmployee = async () => {
      const employeeArr = await getAllEmployee();
      setEmployeeList(employeeArr);
    };
    fetchEmployee();
  }, []);
  console.log(employeeList);
  return (
    <div className="NhanVien_LichLamViec_16">
      {showAddWorkTable ? (
        <AddWorkScheduleModal
          onSetShowAddWorkTable={setShowAddWorkTable}
        ></AddWorkScheduleModal>
      ) : (
        <></>
      )}
      <WorkScheduleHeader></WorkScheduleHeader>
      {employeeList ? (
        <WorkScheduleTable
          employeeListOfParent={employeeList}
          onSetShowAddWorkTable={setShowAddWorkTable}
        ></WorkScheduleTable>
      ) : (
        <div className="NhanVien_Empty_16">
          <i className="fa-solid fa-user"></i>
          <p>Lịch làm việc chưa có nhân viên.</p>
        </div>
      )}
    </div>
  );
};

export default WorkSchedule;
