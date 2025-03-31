import { useState, useEffect } from "react";
import { getAllProducts } from "../../../../../callAPI/productAPI";
import { apiName } from "../../../../../config/APIname";

const ProductTable = ({ productInfo, onSetShowProduct }) => {
  console.log("rerender");
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productArr = await getAllProducts();
        const formattedProducts = productArr.map((item) => ({
          id: item._id,
          productId: item.productId,
          name: item.name,
          categoryName: item.categoryName,
          supplierName: item.supplierName,
          brand: item.brand,
          unit: item.unit,
          sellPrice: item.sellPrice,
          importPrice: item.importPrice,
          stock: item.stock,
          ordered: 0,
          date: new Date(item.createdAt).toISOString().split("T")[0],
          image: `${apiName}${item.image}`,
        }));
        setProducts(formattedProducts);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };
    fetchProducts();
  }, [productInfo]);

  const handleSelectAll = () => {
    setSelectAll((prev) => {
      const newState = !prev;
      setSelectedRows(
        newState ? Object.fromEntries(products.map((p) => [p.id, true])) : {}
      );
      return newState;
    });
  };

  const handleSelectRow = (id) => {
    setSelectedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleShowProduct = (product, e) => {
    if (e.target.tagName === "INPUT") return;
    onSetShowProduct(product);
  };

  return (
    <div className="main-table">
      <div className="card">
        <div className="table-summary">
          <span>
            Tồn kho: <strong>184</strong>
          </span>
          <span>
            Khách đặt: <strong>0</strong>
          </span>
        </div>

        <table className="table-product">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th>Hình ảnh minh họa</th>
              <th>Mã hàng</th>
              <th>Tên hàng</th>
              <th>Giá bán</th>
              <th>Giá vốn</th>
              <th>Tồn kho</th>
              <th>Khách đặt</th>
              <th>Thời gian tạo</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} onClick={(e) => handleShowProduct(product, e)}>
                <td>
                  <input
                    type="checkbox"
                    checked={!!selectedRows[product.id]}
                    onChange={() => handleSelectRow(product.id)}
                  />
                </td>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </td>
                <td>{product.productId}</td>
                <td>{product.name}</td>
                <td>{product.sellPrice}</td>
                <td>{product.importPrice}</td>
                <td>{product.stock}</td>
                <td>{product.ordered}</td>
                <td>{product.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
