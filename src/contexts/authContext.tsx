import axios from "axios";
import React, { useState, createContext, useContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { mentor } from "../hooks/interface";
import { contextT, emailT, errorT, successT } from "../hooks/type";

const authContext = createContext<contextT>(undefined);

export const useAuth = () => {
  return useContext(authContext);
};

const API_ACCOUNT: string = "http://34.172.10.128/api/v1/account/";

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [error, setError] = useState<errorT>("");
  const [success, setSuccess] = useState<successT>("");
  const [nickName, setNickName] = useState<any>("");
  const [user, setUser] = useState<mentor>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
    type: "",
    experience: "",
    audience: "",
  });
  const navigate = useNavigate();

  const refreshToken = async () => {
    let token = JSON.parse(localStorage.getItem("token") || "{}");
    try {
      const Authorization = `Bearer ${token.access}`;
      let res = await axios.post(
        `${API_ACCOUNT}api/token/refresh/`,
        {
          refresh: token.refresh,
        },
        {
          headers: { Authorization },
        }
      );

      localStorage.setItem(
        "token",
        JSON.stringify({ refresh: token.refresh, access: res.data.access })
      );

      let username = localStorage.getItem("username");
      setNickName(username);
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (formData: object, email: string) => {
    try {
      let res = await axios.post(`${API_ACCOUNT}login/`, formData);
      console.log(res);

      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", email);
      setNickName(email);
    } catch (error: any) {
      console.log(Object.values(error.response.data).flat(2));
      setError(Object.values(error.response.data).flat(2));
    }
  };

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setNickName("");
    navigate("/");
  }

  const userRegister = async (formData: object) => {
    try {
      const res = await axios.post(`${API_ACCOUNT}register/`, formData);
      console.log(res);
      navigate("/");
    } catch (error: any) {
      console.log(error);
      console.log(Object.values(error.response.data).flat(2));
      setError(Object.values(error.response.data).flat(2));
    }
  };

  const mentorRegister = async (formData: object) => {
    try {
      const res = await axios.post(`${API_ACCOUNT}register/mentor/`, formData);
      console.log(res);
      navigate("/choose-login");
    } catch (error: any) {
      console.log(error);
      console.log(Object.values(error.response.data).flat(2));
      setError(Object.values(error.response.data).flat(2));
    }
  };

  const forgotPassword = async (formData: object) => {
    try {
      let res = await axios.post(`${API_ACCOUNT}forgot_password/`, formData);
      // navigate('/new-password')

      console.log(res);
      setSuccess(res.data);
      setError("");
    } catch (error: any) {
      console.log(error);
      setError(Object.values(error.response.data).flat(2));
    }
  };
  const forgotPasswordConfirm = async (formData: object) => {
    try {
      let res = await axios.post(
        `${API_ACCOUNT}forgot_password_confirm/`,
        formData
      );
      navigate("/page-not-found");
      console.log(res);
    } catch (error: any) {
      console.log(error);
      setError(Object.values(error.response.data).flat(2));
    }
  };

  const activeCode = async (code: any) => {
    try {
      let res = await axios(`${API_ACCOUNT}activate/${code}/`);
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
  };

  const changePassword = async (formdata: object) => {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      const Authorization = `Bearer ${token.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      let res = await axios.post(
        `${API_ACCOUNT}change_password/`,
        formdata,
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    userLogin,
    refreshToken,
    userRegister,
    mentorRegister,
    nickName,
    error,
    setError,
    setSuccess,
    logout,
    forgotPassword,
    forgotPasswordConfirm,
    activeCode,
    success,
    changePassword,
    user,
    setUser,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
export default AuthContextProvider;
