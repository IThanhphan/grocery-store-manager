import "./productReceipt.css"
import SearchProductReceipt from "./searchProductReceipt/SearchProductReceipt";
import ProductReceiptSidebar from "./productReceiptSidebar/ProductReceiptSidebar";
import ProductReceiptTable from "./productReceiptTable/ProductReceiptTable";

const ProductReceipt = () => {
  return (
    <div className="Order_67">
      <h2>Phiếu đặt hàng</h2>
      <SearchProductReceipt></SearchProductReceipt>
      <ProductReceiptSidebar></ProductReceiptSidebar>
      <ProductReceiptTable></ProductReceiptTable>
    </div>
  );
};

export default ProductReceipt;
