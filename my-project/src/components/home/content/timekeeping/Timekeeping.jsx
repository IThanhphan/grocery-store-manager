import "./timekeeping.css";
import TimekeepingHeader from "./timekeepingHeader/TimekeepingHeader";
import TimekeepingModal from "./timekeepingModal/TimekeepingModal";
import TimekeepingTable from "./timekeepingTable/TimekeepingTable";
import { getAllEmployee } from "../../../../callAPI/employeeAPI";
import { useState, useEffect } from "react";

const Timekeeping = () => {
  const [employeeList, setEmployeeList] = useState(null);
  const [showTimekeepingModal, setShowTimekeepingModal] = useState(false);
  useEffect(() => {
    const fetchEmployee = async () => {
      const employeeArr = await getAllEmployee();
      setEmployeeList(employeeArr);
    };
    fetchEmployee();
  }, []);
  console.log(employeeList);
  return (
    <div className="NhanVien_ChamCong_16">
      <TimekeepingHeader></TimekeepingHeader>
      {/* <!--Thực hiện chấm công--> */}
      {showTimekeepingModal ? (
        <TimekeepingModal
          onSetShowTimekeepingModal={setShowTimekeepingModal}
        ></TimekeepingModal>
      ) : (
        <></>
      )}
      {/* <!--End Thực hiện chấm công--> */}
      {employeeList ? (
        <TimekeepingTable
          employeeListFromParent={employeeList}
          onSetShowTimekeepingModal={setShowTimekeepingModal}
        ></TimekeepingTable>
      ) : (
        <div className="NhanVien_Empty_16">
          <i className="fa-solid fa-user"></i>
          <p>Chưa có nhân viên.</p>
        </div>
      )}
    </div>
  );
};

export default Timekeeping;
