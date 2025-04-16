import "./employee.css";
import { useState, useEffect } from "react";
import AddEmployeeModal from "./addEmployeeModal/AddEmployeeModal";
import EmployeeHeader from "./employeeHeader/EmployeeHeader";
import EmployeeTable from "./employeeTable/EmployeeTable";
import { getAllEmployee } from "../../../../callAPI/employeeAPI";

const Employee = () => {
  const [showAddEmployeeModal, setShowAddEmployeeMode] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);
  const [firstStateEmployeeList, setFirstStateEmployeeList] = useState([]);
  const [listDeleteUser, setListDeleteUser] = useState([]);
  useEffect(() => {
    const fetchEmployee = async () => {
      const employeeArr = await getAllEmployee();
      setEmployeeList(employeeArr);
      setFirstStateEmployeeList(employeeArr);
    };
    fetchEmployee();
  }, [showAddEmployeeModal, listDeleteUser]);
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
        firstStateEmployeeListFromParent={firstStateEmployeeList}
        listDeleteUserFromParent={listDeleteUser}
        onSetEmployeeList={setEmployeeList}
        onSetShowAddEmployeeModal={setShowAddEmployeeMode}
      ></EmployeeHeader>
      <EmployeeTable
        employeeListFromParent={employeeList}
        listDeleteUserFromParent={listDeleteUser}
        onSetListDeleteUser={setListDeleteUser}
        onSetShowAddEmployeeModal={setShowAddEmployeeMode}
      ></EmployeeTable>
    </div>
  );
};

export default Employee;
