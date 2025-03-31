import "./product.css";
import ProductHeader from "./productHeader/ProductHeader";
import ProductSidebar from "./productSidebar/ProductSidebar";
import ProductTable from "./productTable/ProductTable";
import ProductModal from "./productModal/ProductModal";
import { useState } from "react";

const Product = () => {
  const [showProduct, setShowProduct] = useState(null);
  return (
    <div className="container">
      <ProductHeader></ProductHeader>
      <div className="main-content">
        <ProductSidebar></ProductSidebar>
        <ProductTable productInfo={showProduct} onSetShowProduct={setShowProduct}></ProductTable>
      </div>
      {showProduct ? <ProductModal productInfo={showProduct} onSetShowProduct={setShowProduct}></ProductModal> : <></>}
    </div>
  );
};

export default Product;
