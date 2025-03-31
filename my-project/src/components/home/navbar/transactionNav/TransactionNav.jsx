import { useNavigate, useLocation } from "react-router-dom";

const TransactionNav = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const transactionItems = [
    {
      id: 1,
      cate: "Hóa đơn",
      icon: "fa-solid fa-money-bill-wave",
    },
    {
      id: 2,
      cate: "Nhập hàng",
      icon: "fa-solid fa-cart-flatbed",
    },
  ];
  const handleClick = (item) => {
    if (item.id === 1) navigate("/bill");
    if (item.id === 2) navigate("/productReceipt");
  };
  return (
    <div
      className="box_tool_67"
      style={
        location === "/bill" || location === "/productReceipt"
          ? { backgroundColor: "rgb(0, 89, 193)" }
          : {}
      }
    >
      <i className="fa-solid fa-cart-shopping"></i>
      <p>Giao dịch</p>
      {/* Các mục trong Giao dịch */}
      <ul className="container_67">
        {transactionItems.map((item) => (
          <li
            className="box_menu_67"
            key={item.id}
            onClick={() => handleClick(item)}
          >
            <i className={item.icon}></i>
            <a href="#">{item.cate}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionNav;
