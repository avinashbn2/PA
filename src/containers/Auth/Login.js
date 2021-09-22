import React, { useEffect } from "react";
import { Form } from "components/shared/styles";
import Input from "components/Input";
import Button from "components/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login, resetState } from "./authSlice";
import { useHistory } from "react-router-dom";
function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const history = useHistory();
  const status = useSelector((state) => state?.auth?.status);
  console.log("status", status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    if (status === "success") {
      history.push("/secure/project");
    }
  }, [status, history]);

  const onLogin = async (data) => {
    dispatch(login(data));
  };

  return (
    <Form onSubmit={handleSubmit(onLogin)}>
      <Input
        {...register("email", { required: true })}
        placeholder="Enter Email"
        label="Email"
        type="text"
        error={errors.email && "Required"}
      />
      <Input
        {...register("password", { required: true, maxLength: 20 })}
        placeholder="Enter Password"
        label="Password"
        type="password"
        error={errors.password && "Required"}
      />
      <Button type="submit">Login</Button>
    </Form>
  );
}

Login.propTypes = {};
export default Login;
