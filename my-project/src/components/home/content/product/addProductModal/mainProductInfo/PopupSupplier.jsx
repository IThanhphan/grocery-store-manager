import { useState } from "react";
import { addNewSupplier } from "../../../../../../callAPI/supplierAPI";

const PopupSupplier = ({ onSetShowSupplierPopup }) => {
  const [newSupplier, setNewSupplier] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
    company: "",
    note: ""
  })

  const handleAddSupplier = async () => {
    await addNewSupplier(newSupplier);
    setNewSupplier({
      name: "",
      address: "",
      phone: "",
      email: "",
      company: "",
      note: ""
    });
    onSetShowSupplierPopup(false);
  }
  return (
    <div className="modal-08" id="supplier-modal">
      <div className="modal-content-08">
        <div className="modal-header-08">
          <h2>Thêm nhà cung cấp</h2>
          <button
            className="close-modal-btn"
            onClick={() => onSetShowSupplierPopup(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal-body-08">
          <div className="form-group-08">
            <label>Tên nhà cung cấp</label>
            <input
              type="text"
              className="product-text-input-08"
              placeholder="Tên nhà cung cấp"
              value={newSupplier.name}
              onChange={(e) => setNewSupplier((pre) => {
                return {
                  ...pre,
                  name: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div className="modal-body-08">
          <div className="form-group-08">
            <label>Địa chỉ</label>
            <input
              type="text"
              className="product-text-input-08"
              placeholder="Địa chỉ"
              value={newSupplier.address}
              onChange={(e) => setNewSupplier((pre) => {
                return {
                  ...pre,
                  address: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div className="modal-body-08">
          <div className="form-group-08">
            <label>Số điện thoại</label>
            <input
              type="text"
              className="product-text-input-08"
              placeholder="Số điện thoại"
              value={newSupplier.phone}
              onChange={(e) => setNewSupplier((pre) => {
                return {
                  ...pre,
                  phone: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div className="modal-body-08">
          <div className="form-group-08">
            <label>Email</label>
            <input
              type="email"
              className="product-text-input-08"
              placeholder="Email"
              value={newSupplier.email}
              onChange={(e) => setNewSupplier((pre) => {
                return {
                  ...pre,
                  email: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div className="modal-body-08">
          <div className="form-group-08">
            <label>Công ty</label>
            <input
              type="text"
              className="product-text-input-08"
              placeholder="Công ty"
              value={newSupplier.company}
              onChange={(e) => setNewSupplier((pre) => {
                return {
                  ...pre,
                  company: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div className="modal-body-08">
          <div className="form-group-08">
            <label>Ghi chú</label>
            <input
              type="text"
              className="product-text-input-08"
              placeholder="Ghi chú"
              value={newSupplier.note}
              onChange={(e) => setNewSupplier((pre) => {
                return {
                  ...pre,
                  note: e.target.value
                }
              })}
            />
          </div>
        </div>
        <div className="modal-footer-08">
          <button className="save-btn-08" onClick={handleAddSupplier}>
            <i className="fas fa-save"></i> Lưu
          </button>
          <button
            className="cancel-btn-08 close-modal-btn"
            onClick={() => onSetShowSupplierPopup(false)}
          >
            <i className="fas fa-times"></i> Bỏ qua
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupSupplier;
