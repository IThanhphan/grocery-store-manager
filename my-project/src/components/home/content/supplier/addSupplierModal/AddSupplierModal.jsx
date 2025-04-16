import { addNewSupplier } from "../../../../../callAPI/supplierAPI";

const AddSupplierModal = ({
  supplierModalFromParent,
  onSetSupplierModal,
  onSetShowAddSupplierModal,
}) => {
  const handleAddSupplier = async () => {
    await addNewSupplier(supplierModalFromParent);
    onSetShowAddSupplierModal(false);
    onSetSupplierModal({
      name: "",
      address: "",
      phone: "",
      email: "",
      company: "",
      note: "",
    });
  }
  return (
    <div className="DoiTac_Overlay_16">
      <div className="DoiTac_ThemDoiTac_16">
        <div className="ThemDoiTac_Header_16">
          <h2>Thêm nhà cung cấp</h2>
          <button
            className="ThemDoiTac_Close_16"
            onClick={() => onSetShowAddSupplierModal(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="ThemDoiTac_Content_16">
          <div className="ThemDoiTac_info_16">
            <div className="ThemDoiTac_form_16">
              <div className="ThemDoiTac_input_16">
                <label>Mã nhà cung cấp</label>
                <input
                  type="text"
                  placeholder="Mã nhà cung cấp mặc định"
                  disabled
                />
              </div>
              <div className="ThemDoiTac_input_16">
                <label>Tên nhà cung cấp</label>
                <input
                  type="text"
                  value={supplierModalFromParent.name}
                  onChange={(e) => {
                    onSetSupplierModal((pre) => {
                      return {
                        ...pre,
                        name: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="ThemDoiTac_input_16">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  value={supplierModalFromParent.phone}
                  onChange={(e) => {
                    onSetSupplierModal((pre) => {
                      return {
                        ...pre,
                        phone: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="ThemDoiTac_input_16">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  value={supplierModalFromParent.address}
                  onChange={(e) => {
                    onSetSupplierModal((pre) => {
                      return {
                        ...pre,
                        address: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="ThemDoiTac_input_16">
                <label>Email</label>
                <input
                  type="text"
                  value={supplierModalFromParent.email}
                  onChange={(e) => {
                    onSetSupplierModal((pre) => {
                      return {
                        ...pre,
                        email: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="ThemDoiTac_input_16">
                <label>Công ty</label>
                <input
                  type="text"
                  value={supplierModalFromParent.company}
                  onChange={(e) => {
                    onSetSupplierModal((pre) => {
                      return {
                        ...pre,
                        company: e.target.value,
                      };
                    });
                  }}
                />
              </div>
              <div className="ThemDoiTac_input_16">
                <label>Ghi chú</label>
                <input
                  type="text"
                  value={supplierModalFromParent.note}
                  onChange={(e) => {
                    onSetSupplierModal((pre) => {
                      return {
                        ...pre,
                        note: e.target.value,
                      };
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="ThemDoiTac_popup_footer_16">
          <button className="ThemDoiTac_save_16" onClick={handleAddSupplier}>Lưu</button>
          <button
            className="ThemDoiTac_cancel_16"
            onClick={() => onSetShowAddSupplierModal(false)}
          >
            Bỏ qua
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSupplierModal;
