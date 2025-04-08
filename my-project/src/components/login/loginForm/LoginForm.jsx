import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../callAPI/authAPI";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const newUser = {
      name: username,
      password: password,
    };
    loginUser(newUser, dispatch, navigate);
  };

  return (
    <form onSubmit={handleSubmitLogin}>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        type="text"
        className="input-field_78"
        placeholder="Username"
        required
      />
      <hr />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="input-field_78"
        placeholder="Password"
        required
      />
      <hr />
      <div className="them">
        <div className="check_78">
          <input type="checkbox" id="remember" className="checkbox-pass"/>
          <label htmlFor="remember">Duy trì đăng nhập</label>
          <p className="check1_78">|</p>
        </div>
        <div className="link_78">
          <a href="#" className="forgot-password">
            Quên mật khẩu?
          </a>
        </div>
      </div>
      <div className="cuoi_78">
        <button type="submit" className="login-button_78">
          <i className="fa-solid fa-list-check"></i>Quản lý
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
