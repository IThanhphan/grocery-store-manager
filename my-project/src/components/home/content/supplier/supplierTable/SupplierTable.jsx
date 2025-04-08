import { useState, useEffect } from "react";

const SupplierTable = ({
  listSupplierFromParent,
  listDeleteSupplierFromParent,
  onSetListDeleteSupplier,
  onSetShowAddSupplierModal,
}) => {
  const [listSupplier, setListSupplier] = useState([]);
  useEffect(() => {
    if (!listSupplierFromParent || !Array.isArray(listSupplierFromParent))
      return;
    const temp = listSupplierFromParent.map((item) => ({
      supplierInfo: item,
      showSupplierInfo: false,
    }));
    setListSupplier(temp);
  }, [listSupplierFromParent]);

  const handleShowSupplierInfo = (supplier, e) => {
    if (e.target.tagName === "INPUT") return;
    setListSupplier((pre) => {
      supplier.showSupplierInfo = !supplier.showSupplierInfo;
      return [...pre];
    });
  };

  const handleCheckSupplier = (supplierId) => {
    onSetListDeleteSupplier((prev) =>
      prev.includes(supplierId)
        ? prev.filter((id) => id !== supplierId)
        : [...prev, supplierId]
    );
  };

  const handleCheckAllSuppliers = (e) => {
    if (e.target.checked) {
      onSetListDeleteSupplier(listSupplierFromParent.map((p) => p._id));
    } else {
      onSetListDeleteSupplier([]);
    }
  };

  return (
    <div className="DoiTac_Table_16">
      <div className="DoiTac_Header_16">
        <div className="DoiTac_Item_16">
          <input type="checkbox" onChange={handleCheckAllSuppliers}/>
        </div>
        <div className="DoiTac_Item_16">Mã nhà cung cấp</div>
        <div className="DoiTac_Item_16">Tên nhà cung cấp</div>
        <div className="DoiTac_Item_16">Số điện thoại</div>
        <div className="DoiTac_Item_16">Email</div>
        <div className="DoiTac_Item_16">Tổng bán</div>
      </div>

      {listSupplierFromParent ? (
        listSupplier.map((supplier) => (
          <>
            <div
              className="DoiTac_Row_Display_16"
              onClick={(e) => handleShowSupplierInfo(supplier, e)}
            >
              <div className="DoiTac_Row_16">
                <div className="DoiTac_Item_16">
                  <input
                    type="checkbox"
                    onChange={() =>
                      handleCheckSupplier(supplier.supplierInfo._id)
                    }
                    checked={listDeleteSupplierFromParent.includes(
                      supplier.supplierInfo._id
                    )}
                  />
                </div>
                <div className="DoiTac_Item_16">
                  {supplier.supplierInfo.supplierId}
                </div>
                <div className="DoiTac_Item_16">
                  {supplier.supplierInfo.name}
                </div>
                <div className="DoiTac_Item_16">
                  {supplier.supplierInfo.phone}
                </div>
                <div className="DoiTac_Item_16">
                  {supplier.supplierInfo.email}
                </div>
                <div className="DoiTac_Item_16">1,000,000 VNĐ</div>
              </div>
            </div>
            {supplier.showSupplierInfo ? (
              <div className="DoiTac_ChiTietDoiTac_16">
                <div className="DoiTac_ChiTiet_16">
                  <div className="DoiTac_HinhAnh_16">
                    <img src="/image" alt="Ảnh khách hàng" />
                  </div>
                  <div className="DoiTac_ThongTin_16">
                    <div className="DoiTac_ThongTin_16">
                      <div className="DoiTac_Cot_16">
                        <div className="DoiTac_Item_16">
                          <strong>Mã đối tác:</strong>{" "}
                          <input
                            type="text"
                            value={supplier.supplierInfo.supplierId}
                          />
                        </div>
                        <div className="DoiTac_Item_16">
                          <strong>Tên đối tác:</strong>{" "}
                          <input
                            type="text"
                            value={supplier.supplierInfo.name}
                          />
                        </div>
                        <div className="DoiTac_Item_16">
                          <strong>Số điện thoại:</strong>{" "}
                          <input
                            type="tel"
                            value={supplier.supplierInfo.phone}
                          />
                        </div>
                        <div className="DoiTac_Item_16">
                          <strong>Địa chỉ:</strong>{" "}
                          <input
                            type="text"
                            value={supplier.supplierInfo.address}
                          />
                        </div>
                        <div className="DoiTac_Item_16">
                          <strong>Email:</strong>{" "}
                          <input
                            type="text"
                            value={supplier.supplierInfo.email}
                          />
                        </div>
                        <div className="DoiTac_Item_16">
                          <strong>Công ty:</strong>{" "}
                          <input
                            type="text"
                            value={supplier.supplierInfo.company}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="DoiTac_GhiChu_16">
                      <strong>Ghi chú:</strong>{" "}
                      <textarea value={supplier.supplierInfo.note}></textarea>
                    </div>
                  </div>

                  <div className="DoiTac_HanhDong_16">
                    <button className="DoiTac_btn-luu_16">Lưu</button>
                    <button className="DoiTac_btn-xoa_16">Xóa</button>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </>
        ))
      ) : (
        <div className="DoiTac_Empty_16">
          <i className="fa-solid fa-user"></i>
          <p>Chưa có nhà cung cấp.</p>
          <p>
            Nhấn{" "}
            <a
              href="#"
              id="ThemDoiTac_Link_16"
              onClick={() => onSetShowAddSupplierModal(true)}
            >
              vào đây
            </a>{" "}
            để thêm mới nhà cung cấp.
          </p>
        </div>
      )}
    </div>
  );
};

export default SupplierTable;
