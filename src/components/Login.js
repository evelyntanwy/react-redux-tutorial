import React from "react";
// modify values over state
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(login({ name: "Evelyn", age: 31, email: "dany@gmail.com" }))
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}

export default Login;
