import React from "react";
import { Form } from "components/shared/styles";
import Input from "components/Input";
import Button from "components/Button";
import { useForm } from "react-hook-form";
import { http } from "api";

function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSignup = async (data) => {
    const resp = await http("auth/register", {
      body: {
        ...data,
      },
    });
    console.log("resp register ", resp);
  };

  return (
    <Form onSubmit={handleSubmit(onSignup)}>
      <Input
        {...register("name", { required: true, maxLength: 20 })}
        placeholder="Enter Name"
        label="Name"
        type="text"
        error={errors.name && "Required"}
      />
      <Input
        {...register("email", { required: true, maxLength: 20 })}
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
      <Button type="submit">Signup</Button>
    </Form>
  );
}

Signup.propTypes = {};
export default Signup;
