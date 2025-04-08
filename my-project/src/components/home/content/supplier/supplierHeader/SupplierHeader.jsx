import { deleteSupplier } from "../../../../../callAPI/supplierAPI";

const SupplierHeader = ({ listDeleteSupplierFromParent, onSetListSupplier, onSetShowAddSupplierModal }) => {
    const handleDeleteSupplier = async () => {
      await Promise.all(
        listDeleteSupplierFromParent.map((supplierID) => deleteSupplier(supplierID))
      );
      onSetListSupplier((pre) =>
        pre.filter((item) => !listDeleteSupplierFromParent.includes(item._id))
      );
    };
  return (
    <div className="DoiTac_DoiTac_Header_16">
      <h2>Nhà cung cấp</h2>
      <div className="DoiTac_Search_16">
        <div className="Search_16">
          <ion-icon name="search-outline"></ion-icon>
          <input type="text" placeholder="Tìm theo mã, tên, điện thoại" />
        </div>
        <div className="DoiTac_btn_16">
          <button style={{ backgroundColor: "red" }} onClick={handleDeleteSupplier}>
            Xóa
          </button>
        </div>
        <div className="DoiTac_btn_16">
          <button onClick={() => onSetShowAddSupplierModal(true)}>
            <i className="fa-solid fa-plus"></i>Nhà cung cấp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierHeader;
