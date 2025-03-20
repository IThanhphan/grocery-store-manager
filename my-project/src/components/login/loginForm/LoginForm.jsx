import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form>
      <input
        type="text"
        className="input-field_78"
        placeholder="Username"
        required
      />
      <hr />
      <input
        type="password"
        className="input-field_78"
        placeholder="Password"
        required
      />
      <hr />
      <div className="them">
        <div className="check_78">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Duy trì đăng nhập</label>
          <p className="check1_78">|</p>
        </div>
        <div className="link_78">
          <a href="#" className="forgot-password">
            Quên mật khẩu?
          </a>
        </div>
      </div>
      <Link to="/" className="link-no-underline">
        <div className="cuoi_78">
          <button type="submit" className="login-button_78">
            <i className="fa-solid fa-list-check"></i>Quản lý
          </button>
        </div>
      </Link>
    </form>
  );
};

export default LoginForm;