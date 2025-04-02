import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import LogoIcon from "../../assets/Login/logo.svg";
import { Link, useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  MainContainer,
  ImageSide,
  FormSide,
  FormContainer,
  ErrorSpan,
} from "./styles";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [requiredError, setRequiredError] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

  return (
    <MainContainer>
      <ImageSide>
        <div className="image-content">
          <img src={LogoIcon} alt="Logo traços" />
        </div>
      </ImageSide>
      <FormSide>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h1>Recuperação de senha</h1>
          <h2 id="subtitle-main">Não se preocupe estamos trabalhando para recuperar o seu acesso</h2>
          {(errors?.email?.type === "required" ||
            errors?.senha?.type === "required") && (
            <ErrorSpan>
              Por favor, preencha todos os campos obrigatórios
            </ErrorSpan>
          )}
          <TextField
            {...register("email", { required: true })}
            type="email"
            fullWidth
            size="small"
            label="Email*"
            variant="outlined"
            margin="normal"
          />
          <div id="actions">
            <Button type="submit" id="recuperar" fullWidth variant="contained">
              Recuperar senha
            </Button>
            <Link to="/auth/login">ir para login</Link>
          </div>
        </FormContainer>
      </FormSide>
    </MainContainer>
  );
};

export default Register;
