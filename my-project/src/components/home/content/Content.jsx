import Overview from "./overview/Overview";
import Product from "./product/Product";
import AddProductModal from "./product/addProductModal/AddProductModal";
import Bill from "./bill/Bill";
import ProductReceipt from "./productReceipt/ProductReceipt";
import Customer from "./customer/Customer";
import Supplier from "./supplier/Supplier";
import Employee from "./employee/Employee";
import WorkSchedule from "./workSchedule/WorkSchedule";
import Timekeeping from "./timekeeping/Timekeeping";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/product" element={<Product />}></Route>
      <Route path="/addProduct" element={<AddProductModal />}></Route>
      <Route path="/bill" element={<Bill />}></Route>
      <Route path="/productReceipt" element={<ProductReceipt />}></Route>
      <Route path="/customer" element={<Customer />}></Route>
      <Route path="/supplier" element={<Supplier />}></Route>
      <Route path="/employee" element={<Employee />}></Route>
      <Route path="/workSchedule" element={<WorkSchedule />}></Route>
      <Route path="/timekeeping" element={<Timekeeping />}></Route>
    </Routes>
  );
};

export default Content;
