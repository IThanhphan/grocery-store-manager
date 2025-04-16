import "./product.css";
import ProductHeader from "./productHeader/ProductHeader";
import ProductSidebar from "./productSidebar/ProductSidebar";
import ProductTable from "./productTable/ProductTable";
import ProductModal from "./productModal/ProductModal";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../../callAPI/productAPI";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [firstStateProducts, setFirstStateProducts] = useState([]);
  const [chosenProduct, setChosenProduct] = useState(null);
  const [listDelete, setListDelete] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productsArr = await getAllProducts();
      setProducts(productsArr);
      setFirstStateProducts(productsArr);
    };
    fetchProducts();
  }, [listDelete]);

  return (
    <div className="container">
      <ProductHeader
        firstStateProductsFromParent={firstStateProducts}
        listDeleteProducts={listDelete}
        onSetProducts={setProducts}
      ></ProductHeader>
      <div className="main-content">
        <ProductSidebar
          firstStateProductsFromParent={firstStateProducts}
          onSetProducts={setProducts}
        ></ProductSidebar>
        {products ? (
          <ProductTable
            productInfo={products}
            listDeleteProducts={listDelete}
            onSetListDelete={setListDelete}
            onSetChosenProduct={setChosenProduct}
          ></ProductTable>
        ) : (
          <></>
        )}
      </div>
      {chosenProduct ? (
        <ProductModal
          product={chosenProduct}
          onSetProducts={setProducts}
          onSetChosenProduct={setChosenProduct}
        ></ProductModal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Product;
