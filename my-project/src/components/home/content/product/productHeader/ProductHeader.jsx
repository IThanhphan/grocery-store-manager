import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../../../../callAPI/productAPI";
import { useSelector } from "react-redux";

const ProductHeader = ({
  firstStateProductsFromParent,
  listDeleteProducts,
  onSetProducts,
}) => {
  const userLogin = useSelector((state) => state.user?.currentUser);
  const navigate = useNavigate();

  const handleDeleteProducts = async () => {
    await Promise.all(
      listDeleteProducts.map((productID) => deleteProduct(productID))
    );
    onSetProducts((pre) =>
      pre.filter((item) => !listDeleteProducts.includes(item._id))
    );
  };

  const handleSearchProduct = (e) => {
    onSetProducts(() => {
      return [...firstStateProductsFromParent];
    });
    onSetProducts((pre) => {
      let temp = pre.filter(
        (item) =>
          item.productId.startsWith(e.target.value) ||
          item.name.startsWith(e.target.value)
      );
      return [...temp];
    });
  };
  return (
    <div className="content-header">
      <h1>Hàng hóa</h1>
      <div className="search-bar2">
        <div className="search-container">
          <div className="input-wrapper">
            <i className="fas fa-search search-icon"></i>
            <input
              placeholder="Theo mã, tên hàng"
              type="text"
              className="search-input"
              onChange={handleSearchProduct}
            />
          </div>
        </div>
      </div>
      <div className="button-group">
        {userLogin.manager ? (
          <div className="dropdown-container">
            <button
              className="btn-delete btn-green"
              onClick={handleDeleteProducts}
            >
              Xóa
            </button>
          </div>
        ) : (
          <></>
        )}

        <div className="dropdown-container">
          <button className="btn-green" onClick={() => navigate("/addProduct")}>
            + Thêm hàng hóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
