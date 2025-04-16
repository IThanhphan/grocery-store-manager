import { useSelector } from "react-redux";
import { useState } from "react";

const SearchProductReceipt = () => {
  const userLogin = useSelector((state) => state.user?.currentUser);
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="searchbox-btn_67">
      <div className="search_box_67">
        <input type="text" placeholder="Theo mã phiếu nhập" />
        <span className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span className="btn-down">
          <i className="fa-solid fa-caret-down"></i>
        </span>
        <div className="btn-down-table">
          <input type="text" placeholder="Theo mã phiếu nhập" />
          <input type="text" placeholder="Theo mã, tên hàng" />
          <input type="text" placeholder="Theo mã, tên NCC" />
          <input type="text" placeholder="Theo ghi chú" />
          <input type="text" placeholder="Theo ghi chú hàng hóa" />
          <button type="submit" className="btn_search">
            Tìm kiếm
          </button>
        </div>
      </div>
      <div className="btn_67">
        {userLogin.manager ? (
          <button
            className="btn_delete_67"
            type="submit"
            style={{ backgroundColor: "red" }}
          >
            Xóa
          </button>
        ) : (
          <></>
        )}

        <button className="btn_nhaphang_67" type="submit">
          <i className="fa-solid fa-plus"></i>
          <p>Nhập hàng</p>
        </button>
        <div className="menudown_67">
          <button type="submit" onClick={() => setShowDropDown(!showDropDown)}>
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-caret-down"></i>
          </button>
          {showDropDown ? (
            <div className="table_checkbox_67">
              <div>
                <input type="checkbox" />
                <p>Mã nhập hàng</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Mã trả hàng nhập</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Thời gian</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Thời gian tạo</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Ngày cập nhật</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Nhà cung cấp</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Người nhập</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Tổng số lượng</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Tổng số mặt hàng</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Tổng tiền hàng</p>
              </div>

              <div>
                <input type="checkbox" />
                <p>Trạng thái</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchProductReceipt;
