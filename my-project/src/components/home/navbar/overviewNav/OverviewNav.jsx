import { useNavigate, useLocation } from "react-router-dom";

const OverviewNav = () => {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const handleClickOverview = () => {
    navigate("/");
  };
  return (
    <div
      className="box_tool_67"
      onClick={handleClickOverview}
      style={location === "/" ? { backgroundColor: "rgb(0, 89, 193)" } : {}}
    >
      <i className="fa-solid fa-eye"></i>
      <p>Tổng quan</p>
    </div>
  );
};

export default OverviewNav;
