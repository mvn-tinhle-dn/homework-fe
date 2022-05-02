import { Link } from "react-router-dom";
import UserAuth from "../../../hooks/UserAuth";
import useField from "../../../hooks/UseField";

export default function Login() {
  const { login } = UserAuth();
  const email = useField("email");
  const password = useField("password");
  const data = [
    {
      email: "tinh.le@monstar-lab.com",
      password: "Tinhbayern304",
    },
    {
      email: "toan.luu@monstar-lab.com",
      password: "Toan123",
    },
  ];

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const findInfo = data.find((item) => {
      return item.email === email.value && item.password === password.value;
    });

    if (!email.value || !password.value) {
      alert("Missing Params!");
      return;
    } else if (findInfo === undefined) {
      alert("Email or Password does not exist!");
      return;
    } else {
      alert("Logged in successfully")
      login(email.value, password.value);
    }
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div className="img-container">
          <img
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt="Avatar"
            className="avatar"
          />
        </div>

        <div className="container-login">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            id="email"
            name="email"
            placeholder=" Register123@gmail.com..."
            required
            {...email}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            placeholder=" Password >= 8 characters..."
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
            {...password}
          />
          <button type="submit" className="btn btn-login">
            Login
          </button>
          <Link className="link-action" to="/auth/register">Register</Link>
        </div>
      </form>
    </div>
  );
}
