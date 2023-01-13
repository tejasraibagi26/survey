import axios from "axios";
import React, { useState } from "react";
import { isEmpty } from "../../Helpers";
import { IUser } from "../../Interfaces";
import Button from "../Button";
import { Text } from "../TextFields";
import "./auth.css";
const BASE_URL = "http://localhost:3000/api";
const Auth = (props: any) => {
  const isRegister = props?.authType === "register" ? true : false;

  return (
    <section className="auth">
      <div className="container center">
        <div className="header">
          <h1 className="title">{props.authType}</h1>
        </div>
        {isRegister ? renderRegister() : renderLogin()}
      </div>
    </section>
  );
};

interface IErrors {
  email?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}

const renderRegister = () => {
  const [userValues, setUserValues] = useState<IUser>({
    email: undefined,
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
  });
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string>();
  const [errors, setErrors] = useState<IErrors>({
    email: undefined,
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const registerUser = () => {
    setLoading(true);
    try {
      isEmpty(userValues);
      axios
        .post(`${BASE_URL}/user/register`, {
          email: userValues.email,
          username: userValues.username,
          password: userValues.password,
          confirmPassword: userValues.confirmPassword,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error: any) {
      error.errors.forEach((err: any) => {
        setErrors((prev: any) => ({
          ...prev,
          [err.field]: err.message,
        }));
      });
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValues((prev: any) => ({
      ...prev,
      [e?.target?.name]: e.target.value,
    }));
  };

  return (
    <form>
      <Text
        label="Email"
        type="email"
        placeholder="email@example.com"
        className="textfield"
        onChange={onChange}
        error={!!errors.email}
        name={"email"}
      />
      <Text
        label="Username"
        type="text"
        placeholder="Username"
        onChange={onChange}
        className="textfield"
        error={!!errors.username}
        name={"username"}
      />
      <Text
        label="Password"
        type="password"
        placeholder="Enter Password"
        onChange={onChange}
        className="textfield"
        error={!!errors.password}
        name={"password"}
      />
      <Text
        label="Confirm Password"
        type="password"
        placeholder="Confirm Password"
        onChange={onChange}
        className="textfield"
        error={!!errors.confirmPassword}
        name={"confirmPassword"}
      />
      <Button
        buttonText={"Register"}
        classNames={
          "btn-w-100 btn-primary btn-h-80-px btn-flex btn-center btn-font-lg"
        }
        onClickFn={registerUser}
        loading={loading}
      />
      {error && <p className="error">{error}</p>}
    </form>
  );
};

const renderLogin = () => {
  const [userValues, setUserValues] = useState<IUser>({
    email: undefined,
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
  });
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string>();
  const [errors, setErrors] = useState<IErrors>({
    email: undefined,
    username: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserValues((prev: any) => ({
      ...prev,
      [e?.target?.name]: e.target.value,
    }));
  };

  const loginUser = () => {
    delete userValues.confirmPassword;
    delete userValues.username;
    setLoading(true);
    try {
      isEmpty(userValues);
    } catch (error: any) {
      error.errors.forEach((err: any) => {
        setErrors((prev: any) => ({
          ...prev,
          [err.field]: err.message,
        }));
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form>
      <Text
        label="Email"
        type="email"
        placeholder="email@example.com"
        className="textfield"
        onChange={onChange}
        error={!!errors.email}
        name={"email"}
      />
      <Text
        label="Password"
        type="password"
        placeholder="Enter Password"
        onChange={onChange}
        className="textfield"
        error={!!errors.password}
        name={"password"}
      />
      <Button
        buttonText={"Login"}
        classNames={
          "btn-w-100 btn-primary btn-h-80-px btn-flex btn-center btn-font-lg"
        }
        onClickFn={loginUser}
        loading={loading}
      />
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Auth;
