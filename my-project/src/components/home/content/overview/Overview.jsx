import "./overview.css"
import RevenueChart from "./revenueChart/RevenueChart";
import ProductChart from "./productChart/ProductChart";

const Overview = () => {
  const saleLastMonth = 23.01;
  return (
    <section className="overview">
      <div className="dashboard1">
        <div className="dashboard-top">
          <div className="topTitle">KẾT QUẢ BÁN HÀNG HÔM NAY</div>
          <div className="list">
            <ul className="dashboardList">
              <li className="total">
                <label className="dash_icon">
                  <span className="dollar">$</span>
                </label>
                <label className="dash_title">0 Hóa đơn</label>
                <span className="number">
                  <span className="txt">0</span>
                </span>
                <span className="yesterday">Doanh thu</span>
              </li>
              <li className="compare">
                <label className="dash_title">&nbsp;</label>
                <label className="dash_icon">
                  <i
                    className={`fa ${
                      saleLastMonth > 0 ? "fa-arrow-up" : "fa-arrow-down"
                    }`}
                  ></i>
                </label>
                <span className="number">
                  <span className="txt">{saleLastMonth}%</span>
                </span>
                <span className="yesterday">So với cùng kỳ tháng trước</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="dashboard-middle">
          <div className="midTitleWrap">
            <div className="title-fill">
              <div className="midTitle">doanh thu thuần năm này</div>
              <i className="fa fa-arrow-circle-right"></i>
              <span className="total-value">%N%</span>
            </div>
            <div className="selector">
              <select name="date" className="date">
                <option value="homnay">Năm nay</option>
                <option value="homqua">Năm trước</option>
              </select>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <RevenueChart></RevenueChart>
        </div>

        <div className="dashboard-bottom">
          <div className="midTitleWrap">
            <div className="title-fill">
              <div className="midTitle">Top 10 hàng hóa bán chạy Tháng này</div>
              <div className="selector">
                <select name="date" className="date">
                  <option value="doanhthuthuan" selected>
                    Theo doanh thu thuần
                  </option>
                  <option value="soluong">Theo số lượng</option>
                </select>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            <div className="selector">
              <select name="date" className="date">
                <option value="homnay">Năm nay</option>
                <option value="homqua">Năm trước</option>
              </select>
              <i className="fa-solid fa-chevron-down"></i>
            </div>
          </div>
          <h1 className="grap_title">Biểu đồ</h1>
          <ProductChart></ProductChart>
        </div>
      </div>
    </section>
  );
};

export default Overview;