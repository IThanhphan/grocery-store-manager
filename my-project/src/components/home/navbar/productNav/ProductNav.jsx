import { useNavigate, useLocation } from "react-router-dom";

const ProductNav = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const handleClickProduct = () => {
    navigate("/product");
  };
  return (
    <div
      className="box_tool_67"
      onClick={handleClickProduct}
      style={
        location === "/product" || location === "/addProduct" ? { backgroundColor: "rgb(0, 89, 193)" } : {}
      }
    >
      <i className="fa-solid fa-box"></i>
      <p>Hàng hóa</p>
    </div>
  );
};

export default ProductNav;
