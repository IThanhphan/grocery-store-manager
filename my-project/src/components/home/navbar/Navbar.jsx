import "./navbar.css";
import Overview from "./overview/Overview";
import Product from "./product/Product";
import Transaction from "./transaction/Transaction";
import Partner from "./partner/Partner";
import Employee from "./employee/Employee";
import CashBook from "./cashBook/CashBook";

const Navbar = () => {
  return (
    <div className="toolbar_67">
      {/* Mục Tổng quan */}
      <Overview></Overview>
      {/* Mục Hàng hóa */}
      <Product></Product>
      {/* Mục Giao dịch */}
      <Transaction></Transaction>
      {/* Mục Đối tác */}
      <Partner></Partner>
      {/* Mục Nhân viên */}
      <Employee></Employee>
      {/* Mục Sổ quỹ */}
      <CashBook></CashBook>
    </div>
  );
};

export default Navbar;
