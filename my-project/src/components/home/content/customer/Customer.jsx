import "./customer.css";
import AddCustomerModal from "./addCustomerModal/AddCustomerModal";
import CustomerHeader from "./customerHeader/CustomerHeader";
import CustomerTable from "./customerTable/CustomerTable";
import { useState, useEffect } from "react";
import { getAllCustomer } from "../../../../callAPI/customerAPI";

const Customer = () => {
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const [listCustomer, setListCustomer] = useState([]);
  const [firstStateListCustomer, setFirstSateListCusTomer] = useState([]);
  const [customerModal, setCustomerModal] = useState({
    name: "",
    gender: true,
    customerType: true,
    identityNumber: "",
    company: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    note: ""
  });
  const [listDeleteCustomer, setListDeleteCustomer] = useState([]);

  useEffect(() => {
    const fetchCustomer = async () => {
      const customerArr = await getAllCustomer();
      setListCustomer(customerArr);
      setFirstSateListCusTomer(customerArr);
    }
    fetchCustomer();
  }, [showAddCustomerModal, listDeleteCustomer]);
  return (
    <section className="KhachHang_16">
      {showAddCustomerModal ? (
        <AddCustomerModal
          customerModalFromParent={customerModal}
          onSetCustomerModal={setCustomerModal}
          onSetShowAddCustomerModal={setShowAddCustomerModal}
        ></AddCustomerModal>
      ) : (
        <></>
      )}

      <CustomerHeader
        firstStateListCustomerFromParent={firstStateListCustomer}
        listDeleteCustomerFromParent={listDeleteCustomer}
        onSetListCustomer={setListCustomer}
        onSetShowAddCustomerModal={setShowAddCustomerModal}
      ></CustomerHeader>

      <CustomerTable
        listDeleteCustomerFromParent={listDeleteCustomer}
        listCustomerFromParent={listCustomer}
        onSetListDeleteCustomer={setListDeleteCustomer}
        onSetShowAddCustomerModal={setShowAddCustomerModal}
      ></CustomerTable>
    </section>
  );
};

export default Customer;
