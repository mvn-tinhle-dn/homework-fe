import React from "react";
import TableUserComponent from "./TableUserComponent";
import { toast } from "react-toastify";
import PopupComponent from "../modules/popup/PopupComponent";

export default class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      email: "",
      password: "",
      country: "VietNam",
      gender: 1,
      info: "",
      agree: true,
      confirm: false,
      arrUser: [],
    };
  }

  handleOnChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      id: "USER " + Math.floor(Math.random() * 10000),
      [name]: value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    if (
      !this.state.country ||
      !this.state.email ||
      !this.state.password ||
      this.state.password.length < 8 ||
      !this.state.agree
    ) {
      toast.warning("Missing parameters!");
      return;
    } else {
      const { id, email, password, country, gender, info, agree, arrUser } =
        this.state;
      const item = { id, email, password, country, gender, info, agree };
      this.setState({ arrUser: [...arrUser, item] });
      toast.success("Register Success!");

      event.target.reset();
      //reset state
      this.setState({
        id: "",
        email: "",
        password: "",
        country: "VietNam",
        gender: 1,
        info: "",
        agree: true,
      });
    }
  }

  handleDeleteAUser = (user) => {
    this.setState({ confirm: true, id: user.id });
  };

  handleOnCancel() {
    this.setState({
      confirm: false,
    });
  }
  handleOnConfirm() {
    this.setState({
      confirm: false,
    });
    let currentUser = this.state.arrUser;
    currentUser = currentUser.filter((item) => item.id !== this.state.id);
    this.setState({ arrUser: [...currentUser] });
  }

  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleOnSubmit(e)}>
          <h2>Register Account</h2>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder=" Register123@gmail.com..."
              required
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder=" Password >= 8 characters..."
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            />
          </div>
          <div className="form-item">
            <label>Country</label>
            <select
              name="country"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            >
              <option>VietNam</option>
              <option>Japan</option>
              <option>China</option>
              <option>Korea</option>
            </select>
          </div>
          <div className="form-item">
            <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value="0"
              defaultChecked={this.state.gender === 0}
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="1"
              defaultChecked={this.state.gender === 1}
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            />{" "}
            FeMale
          </div>
          <div className="form-item">
            <label htmlFor="info">More </label>
            <textarea
              id="info"
              name="info"
              placeholder="More description ..."
              maxLength="80"
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            ></textarea>
          </div>
          <div className="form-item">
            Do you agree to our terms?
            <input
              type="checkbox"
              name="agree"
              defaultChecked={this.state.agree}
              onChange={(e) => {
                this.handleOnChange(e);
              }}
            ></input>
          </div>
          <div className="form-item">
            <button type="submit">Register</button>
          </div>
        </form>
        <TableUserComponent
          arrUser={this.state.arrUser}
          handleDeleteAUser={(user) => this.handleDeleteAUser(user)}
        />
        <PopupComponent
          confirm={this.state.confirm}
          handleOnCancel={() => this.handleOnCancel()}
          handleOnConfirm={() => this.handleOnConfirm()}
          submit="Delete"
        ></PopupComponent>
      </>
    );
  }
}
