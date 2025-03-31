const BillTable = ({ orderListFromParent }) => {
  console.log(orderListFromParent);
  return (
    <div className="order-table_67">
      <table>
        <tr className="name_columns_67">
          <th className="column_1">
            <input type="checkbox" />
          </th>
          <th className="column_2">Mã hóa đơn</th>
          <th className="column_3">Thời gian</th>
          <th className="column_4">Mã trả hàng</th>
          <th className="column_5">Khách hàng</th>
          <th className="column_6">Tổng tiền hàng</th>
          <th className="column_7">Giảm giá</th>
          <th className="column_8">Khách đã trả</th>
        </tr>
      </table>
      <div className="body_table_67">
        <table>
          <tr className="total_67">
            <td className="column_1"></td>
            <td className="column_2"></td>
            <td className="column_3"></td>
            <td className="column_4"></td>
            <td className="column_5"></td>
            <td className="column_6"></td>
            <td className="column_7"> 0</td>
            <td className="column_8"></td>
          </tr>
          {orderListFromParent.map((item) => {
            return (
              <tr className="data_67" key={item.orderId}>
                <td className="column_1">
                  <input type="checkbox" />
                </td>
                <td className="column_2">{item.orderId}</td>
                <td className="column_3">{item.orderDate}</td>
                <td className="column_4"></td>
                <td className="column_5">{item.customerName}</td>
                <td className="column_6">{item.totalAmount}</td>
                <td className="column_7">0</td>
                <td className="column_8">{item.totalAmount}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default BillTable;
