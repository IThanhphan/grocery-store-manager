import { apiName } from "../../../../../config/APIname";

const ProductTable = ({
  productInfo,
  listDeleteProducts,
  onSetListDelete,
  onSetChosenProduct,
}) => {
  const handleShowProduct = (product, e) => {
    if (e.target.tagName === "INPUT") return;
    onSetChosenProduct(product);
  };

  const handleCheckProduct = (productId) => {
    onSetListDelete((prev) =>
      prev.includes(productId) ? prev.filter(id => id !== productId) : [...prev, productId]
    );
  };

  const handleCheckAllProducts = (e) => {
    if (e.target.checked) {
      onSetListDelete(productInfo.map(p => p._id));
    } else {
      onSetListDelete([]);
    }
  }

  console.log(listDeleteProducts);

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
                <input type="checkbox" onChange={handleCheckAllProducts}/>
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
            {productInfo.map((product) => (
              <tr
                key={product._id}
                onClick={(e) => handleShowProduct(product, e)}
              >
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckProduct(product._id)}
                    checked={listDeleteProducts.includes(product._id)}
                  />
                </td>
                <td>
                  <img
                    src={`${apiName}${product.image}`}
                    alt={product.name}
                    className="product-image"
                  />
                </td>
                <td>{product.productId}</td>
                <td>{product.name}</td>
                <td>{product.sellPrice.toLocaleString("vi-VN")}</td>
                <td>{product.importPrice.toLocaleString("vi-VN")}</td>
                <td>{product.stock}</td>
                <td>0</td>
                <td>{new Date(product.createdAt).toLocaleDateString("vi-VN")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
