import React from 'react';
import { Link } from 'react-router-dom';
import useField from '../../../hooks/UseField';

export default function Register() {
  const email = useField("email");
  const password = useField("password");

  return (
    <div className='container'>
      <form>
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
            Register
          </button>
          <Link className="link-action" to="/auth/login">Login</Link>
        </div>
      </form>
    </div>
  )
}
