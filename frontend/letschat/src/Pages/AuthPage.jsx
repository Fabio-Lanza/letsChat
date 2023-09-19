import axios from "axios";
import logo from "../assets/logoMain.svg";

const AuthPage = ({ onAuth }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("http://localhost:3001/authenticate", { username: value })
      .then((res) => onAuth({ ...res.data, secret: value }))
      .catch((error) => console.log(error));
  };

  return (
    <div className="background">
      <img src={logo} alt="" className="logo" />
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">
          Welcome to <span>Let's</span> <span>CHAT</span>
        </div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
