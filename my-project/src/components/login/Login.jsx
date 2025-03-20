import "./login.css";
import logo1 from "../../assets/imgs/logo1.png";
import logo2 from "../../assets/imgs/logo2.png";
import LoginForm from "./loginForm/LoginForm";

const Login = () => {
  return (
    <div className="login_1">
      <div className="content_78">
        <div className="login-container_78">
          <div className="head_78">
            <div className="head_chu">
              <img src={logo1} alt="" />
            </div>
            <div className="head_hinh">
              <img src={logo2} alt="" />
            </div>
          </div>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
