import React, { useEffect } from "react";
import { Container, Wrapper, StyledLoginForm } from "./styles";
import Input from "components/Input";
import Button from "components/Button";
import Work from "components/SVG/Work";
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
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "success") {
      history.push("/secure/project");
      dispatch(resetState());
    }
  }, [status, history, dispatch]);

  const onLogin = async (data) => {
    dispatch(login(data));
  };

  return (
    <Container>
      <Work width="100%" height="100%" />
      <Wrapper>
        <StyledLoginForm onSubmit={handleSubmit(onLogin)}>
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
          <Button type="submit" fullWidth>
            Login
          </Button>
        </StyledLoginForm>
      </Wrapper>
    </Container>
  );
}

Login.propTypes = {};
export default Login;
