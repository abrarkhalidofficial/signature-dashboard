import React from "react";

function InputBox({ placeholder, label, type }) {
  return (
    <div className="login__main__container__content__input__wrapper">
      <label className="login__main__container__content__input__label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="login__main__container__content__input"
      />
    </div>
  );
}

export default function Login() {
  return (
    <div className="login__main__container">
      <div className="login__main__container__content">
        <div className="login__main__container__content__heading">Login</div>
        <InputBox placeholder="Email" label="Email" type="text" />
        <InputBox placeholder="Password" label="Password" type="password" />
        <div
          style={{ marginTop: 16 }}
          className="homepage__container__jumbotron__form__filters__role"
        >
          <input
            className="styled-checkbox"
            id="styled-checkbox-freelancer-role"
            type="checkbox"
            value="Remember"
            name="Remember"
          />
          <label
            style={{ color: "#1c0a15", fontSize: 14 }}
            htmlFor="styled-checkbox-freelancer-role"
          >
            Remember Me
          </label>
        </div>
        <button className="login__main__container__content__cta">Login</button>
      </div>
    </div>
  );
}
