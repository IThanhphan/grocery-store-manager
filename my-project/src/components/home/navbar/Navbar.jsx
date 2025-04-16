import "./navbar.css";
import OverviewNav from "./overviewNav/OverviewNav";
import ProductNav from "./productNav/ProductNav";
import TransactionNav from "./transactionNav/TransactionNav";
import PartnerNav from "./partnerNav/PartnerNav";
import EmployeeNav from "./employeeNav/EmployeeNav";
import { useSelector } from "react-redux";

const Navbar = () => {
  const userLogin = useSelector((state) => state.user?.currentUser);
  return (
    <div className="toolbar_67">
      {/* Mục Tổng quan */}
      <OverviewNav></OverviewNav>
      {/* Mục Hàng hóa */}
      <ProductNav></ProductNav>
      {/* Mục Giao dịch */}
      <TransactionNav></TransactionNav>
      {/* Mục Đối tác */}
      <PartnerNav></PartnerNav>
      {/* Mục Nhân viên */}
      {userLogin.manager ? <EmployeeNav></EmployeeNav> : <></>}
      
    </div>
  );
};

export default Navbar;
