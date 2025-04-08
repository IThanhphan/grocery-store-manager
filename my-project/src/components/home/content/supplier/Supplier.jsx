import "./supplier.css";
import AddSupplierModal from "./addSupplierModal/AddSupplierModal";
import SupplierHeader from "./supplierHeader/SupplierHeader";
import SupplierTable from "./supplierTable/SupplierTable";
import { useState, useEffect } from "react";
import { getAllSupplier } from "../../../../callAPI/supplierAPI";

const Supplier = () => {
  const [showAddSupplierModal, setShowAddSupplierModal] = useState(false);
  const [listSupplier, setListSupplier] = useState([]);
  const [supplierModal, setSupplierModal] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    company: "",
    note: ""
  })
  const [listDeleteSupplier, setListDeleteSupplier] = useState([]);

  useEffect(() => {
    const fetchSupplier = async () => {
      const supplierArr = await getAllSupplier();
      setListSupplier(supplierArr);
    };
    fetchSupplier();
  }, [showAddSupplierModal]);
  return (
    <section className="DoiTac_16">
      {showAddSupplierModal ? (
        <AddSupplierModal
          supplierModalFromParent={supplierModal}
          onSetSupplierModal={setSupplierModal}
          onSetShowAddSupplierModal={setShowAddSupplierModal}
        ></AddSupplierModal>
      ) : (
        <></>
      )}

      <SupplierHeader
        listDeleteSupplierFromParent={listDeleteSupplier}
        onSetListSupplier={setListSupplier}
        onSetShowAddSupplierModal={setShowAddSupplierModal}
      ></SupplierHeader>

      <SupplierTable
        listSupplierFromParent={listSupplier}
        listDeleteSupplierFromParent={listDeleteSupplier}
        onSetListDeleteSupplier={setListDeleteSupplier}
        onSetShowAddSupplierModal={setShowAddSupplierModal}
      ></SupplierTable>
    </section>
  );
};

export default Supplier;
