import React, { useState, useRef } from "react";
import TableUserComponent from "../table";
import { toast } from "react-toastify";
import useField from "../../utils/useField";

export default function FormComponent() {
  const email = useField("email");
  const password = useField("password");
  const country = useField("");
  const gender = useField("radio");
  const info = useField("");
  const agree = useField("checkbox");
  const nameRef = useRef()

  const [data, setData] = useState([]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (
      !email.value ||
      !country.value ||
      !password.value ||
      password.value.length < 8 ||
      !agree.value
    ) {
      toast.warning("Missing parameters!");
      return;
    } else {
      const id = Math.floor(Math.random() * 1000);
      const user = {
        id,
        email: email.value,
        password: password.value,
        country: country.value,
        gender: gender.value,
        info: info.value,
        agree: agree.value,
      };
      setData([...data, user]);
      toast.success("Register Success!");
      event.target.reset();
      nameRef.current.focus();      
    };
  }
  const handleDeleteAUser = (userItem) => {
    const currentUser = data.filter((item) => userItem.id !== item.id);
    setData(currentUser);
  };

  return (
    <>
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <h2>Register Account</h2>
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input
            ref={nameRef}
            id="email"
            name="email"
            placeholder=" Register123@gmail.com..."
            required
            {...email}
          />
        </div>
        <div className="form-item">
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
        </div>
        <div className="form-item">
          <label>Country</label>
          <select name="country" {...country} required>
            <option>Choose Country</option>
            <option>VietNam</option>
            <option>Japan</option>
            <option>China</option>
            <option>Korea</option>
          </select>
        </div>
        <div className="form-item">
          <label>Gender</label>
          <input name="gender" {...gender} value="0" /> Male
          <input name="gender" {...gender} value="1" /> FeMale
        </div>
        <div className="form-item">
          <label htmlFor="info">More </label>
          <textarea
            id="info"
            name="info"
            placeholder="More description ..."
            maxLength="80"
            {...info}
          ></textarea>
        </div>
        <div className="form-item">
          Do you agree to our terms?
          <input name="agree" defaultChecked={false} required {...agree}></input>
        </div>
        <div className="form-item">
          <button type="submit">Register</button>
        </div>
      </form>
      <TableUserComponent
        arrUser={data}
        handleDeleteAUser={(userItem) => handleDeleteAUser(userItem)}
      />
    </>
  );
}
