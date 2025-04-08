import "./employee.css";
import { useState, useEffect } from "react";
import AddEmployeeModal from "./addEmployeeModal/AddEmployeeModal";
import EmployeeHeader from "./employeeHeader/EmployeeHeader";
import EmployeeTable from "./employeeTable/EmployeeTable";
import { getAllEmployee } from "../../../../callAPI/employeeAPI";

const Employee = () => {
  const [showAddEmployeeModal, setShowAddEmployeeMode] = useState(false);
  const [employeeList, setEmployeeList] = useState(null);
  useEffect(() => {
    const fetchEmployee = async () => {
      const employeeArr = await getAllEmployee();
      setEmployeeList(employeeArr);
    };
    fetchEmployee();
  }, []);  
  return (
    <div className="NhanVien_16">
      {showAddEmployeeModal ? (
        <AddEmployeeModal
          onSetShowAddEmployeeModal={setShowAddEmployeeMode}
        ></AddEmployeeModal>
      ) : (
        <></>
      )}
      <EmployeeHeader
        onSetShowAddEmployeeModal={setShowAddEmployeeMode}
      ></EmployeeHeader>
      <EmployeeTable
        employeeListFromParent={employeeList}
        onSetShowAddEmployeeModal={setShowAddEmployeeMode}
      ></EmployeeTable>
    </div>
  );
};

export default Employee;
