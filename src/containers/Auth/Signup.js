import React, { useEffect } from "react";
import { Container, Wrapper, StyledSignupForm } from "./styles";
import Input from "components/Input";
import Button from "components/Button";
import Work from "components/SVG/Work";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { register as registerAction, resetState } from "./authSlice";
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
    dispatch(resetState());
  }, [dispatch]);

  useEffect(() => {
    if (status === "success") {
      history.push("/secure/project");
    }
  }, [status, history]);

  const onLogin = async (data) => {
    dispatch(registerAction(data));
  };

  return (
    <Container>
      <Work width="100%" height="100%" />
      <Wrapper>
        <StyledSignupForm onSubmit={handleSubmit(onLogin)}>
          <Input
            {...register("name", { required: true })}
            placeholder="Enter Name"
            label="Name"
            type="text"
            error={errors.name && "Required"}
          />
          <Input
            {...register("email", { required: true })}
            placeholder="Enter Email"
            label="Email"
            type="email"
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
            Register
          </Button>
        </StyledSignupForm>
      </Wrapper>
    </Container>
  );
}

Login.propTypes = {};
export default Login;
