import { getAllCategory } from "../../../../../callAPI/categoryAPI";
import { getAllSupplier } from "../../../../../callAPI/supplierAPI";
import { getAllBrand } from "../../../../../callAPI/productAPI";
import { useState, useEffect } from "react";

const ProductSidebar = ({ firstStateProductsFromParent, onSetProducts }) => {
  const [listCategory, setListCategory] = useState([]);
  const [listSupplier, setListSupplier] = useState([]);
  const [listBrand, setListBrand] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    category: [],
    supplier: [],
    brand: [],
  });
  useEffect(() => {
    const fetch = async () => {
      const categoryArr = await getAllCategory();
      const supplierArr = await getAllSupplier();
      const brandArr = await getAllBrand();
      setListCategory(categoryArr);
      setListSupplier(supplierArr);
      setListBrand(brandArr);
    };
    fetch();
  }, []);

  useEffect(() => {
    onSetProducts(() => {
      return [...firstStateProductsFromParent];
    });
    onSetProducts((pre) => {
      let filtered = [...pre];

      if (filterCriteria.category.length > 0) {
        filtered = filtered.filter((item) =>
          filterCriteria.category.includes(item.categoryName)
        );
      }

      if (filterCriteria.supplier.length > 0) {
        filtered = filtered.filter((item) =>
          filterCriteria.supplier.includes(item.supplierName)
        );
      }

      if (filterCriteria.brand.length > 0) {
        filtered = filtered.filter((item) =>
          filterCriteria.brand.includes(item.brand)
        );
      }

      return filtered;
    });
  }, [filterCriteria]);

  const handleCheckBoxChange = (type, name) => {
    setFilterCriteria((prev) => {
      const updatedList = prev[type].includes(name)
        ? prev[type].filter((item) => item !== name)
        : [...prev[type], name];

      return {
        ...prev,
        [type]: updatedList,
      };
    });
  };

  return (
    <div className="sidebar">
      <div className="card">
        <details>
          <summary>
            <span>Loại hàng</span>
            <i className="fas fa-chevron-down toggle-icon"></i>
          </summary>
          <div className="toggle-content">
            {listCategory.map((category) => (
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={filterCriteria.category.includes(category.name)}
                  onChange={() =>
                    handleCheckBoxChange("category", category.name)
                  }
                />
                {category.name}
              </label>
            ))}
          </div>
        </details>
      </div>
      <div className="card">
        <details>
          <summary>
            <span>Nhà cung cấp</span>
            <i className="fas fa-chevron-down toggle-icon"></i>
          </summary>
          <div className="toggle-content">
            {listSupplier.map((supplier) => (
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={filterCriteria.supplier.includes(supplier.name)}
                  onChange={() =>
                    handleCheckBoxChange("supplier", supplier.name)
                  }
                />
                {supplier.name}
              </label>
            ))}
          </div>
        </details>
      </div>
      <div className="card">
        <details>
          <summary>
            <span>Thương hiệu</span>
            <i className="fas fa-chevron-down toggle-icon"></i>
          </summary>
          <div className="toggle-content">
            {listBrand.map((brand) => (
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={filterCriteria.brand.includes(brand.name)}
                  onChange={() => handleCheckBoxChange("brand", brand.name)}
                />
                {brand.name}
              </label>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
};

export default ProductSidebar;
