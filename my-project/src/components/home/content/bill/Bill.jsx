import "./bill.css";
import SearchBill from "./searchBill/SearchBill";
import BillSidebar from "./billSidebar/BillSidebar";
import BillTable from "./billTable/BillTable";
import AddBillModal from "./addBillModal/AddBillModal";
import { useState, useEffect } from "react";
import { getAllOrder } from "../../../../callAPI/orderAPI";

const Bill = () => {
  const [orderList, setOrderList] = useState(null);
  const [showAddBillModal, setShowAddBillModal] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const orderArr = await getAllOrder();
        console.log(orderArr);
        setOrderList(orderArr);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };
    fetchProducts();
  }, [showAddBillModal]);
  return (
    <>
      <div className="Order_67">
        <h2>Hóa đơn</h2>
        <SearchBill onSetShowAddBillModal={setShowAddBillModal}></SearchBill>
        <BillSidebar></BillSidebar>
        {/* Phần bảng chứa các sản phẩm */}
        {orderList ? (
          <BillTable orderListFromParent={orderList}></BillTable>
        ) : (
          <></>
        )}
      </div>
      {showAddBillModal ? <AddBillModal onSetShowAddBillModal={setShowAddBillModal}></AddBillModal> : <></>}
    </>
  );
};

export default Bill;
