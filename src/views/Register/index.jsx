import React from "react";
import LogoIcon from "../../assets/Login/logo.svg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {
  MainContainer,
  ImageSide,
  FormSide,
  FormContainer,
  SugestionP,
  ErrorSpan,
} from "./styles";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
    <MainContainer>
      <ImageSide>
        <div className="image-content">
          <img src={LogoIcon} alt="Logo traços" />
        </div>
      </ImageSide>
      <FormSide>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h1>Realize o seu cadastro</h1>
          <h2 id="subtitle-main">Não perca oportunidades e inspirações</h2>
          <h2 id="subtitle-normal">Dados de perfil</h2>
          <TextField
            {...register("name", {
              required: "Por favor, preencha o campo com o nome",
            })}
            fullWidth
            size="small"
            label="Nome de usuário*"
            variant="outlined"
            margin="normal"
          />
          <TextField
            {...register("email", {
              required: "Por favor, preencha o campo com o email",
            })}
            fullWidth
            size="small"
            label="Email*"
            variant="outlined"
            margin="normal"
          />
          <TextField
            {...register("password", {
              required: "Por favor, preencha o campo com a senha",
            })}
            fullWidth
            size="small"
            label="Senha*"
            variant="outlined"
            margin="normal"
          />
          <TextField
            {...register("confirm", {
              required: "Por favor, preencha o campo com a confirmação",
            })}
            fullWidth
            size="small"
            label="Confirmar senha*"
            variant="outlined"
            margin="normal"
          />
          <SugestionP>
            Sua senha deve conter pelo menos: um caractere especial, uma letra
            maiúscula, uma letra minúscula e um número
          </SugestionP>
          <h2 id="subtitle-normal">Sou Tatuador ou Tatuadora</h2>
          <SugestionP>
            Na Traços tatuadores tem acesso à uma conta exclusiva com recursos
            diferenciais para adquirir clientes no dia a dia
          </SugestionP>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                required
                sx={{
                  color: grey[800],
                  "&.Mui-checked": {
                    color: grey[900],
                  },
                }}
              />
            }
            label="Sou Tatuador ou Tatuadora"
          />
          <SugestionP>
            Atente-se que os recursos só serão liberados após a comprovação da
            certificação profissional
          </SugestionP>
          <h2 id="subtitle-normal">Proteção de dados</h2>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked
                required
                sx={{
                  color: grey[800],
                  "&.Mui-checked": {
                    color: grey[900],
                  },
                }}
              />
            }
            label="Estou ciente da política de privacidade e de proteção aos dados"
          />
          <div id="actions">
            {(errors?.email?.type === "required" ||
              errors?.password?.type == "required" ||
              errors?.name?.type == "required" ||
              errors?.confirm?.type == "required"
            ) && (
              <ErrorSpan>
                Atente-se aos campos do formulário dados obrigatórios não preenchidos
              </ErrorSpan>
            )}
            <Button type="submit" id="entrar" fullWidth variant="contained">
              Cadastrar
            </Button>
            <Link id="register-button" to="/auth/login">
              <Button id="cadastre" fullWidth variant="contained">
                Já tenho uma conta
              </Button>
            </Link>
          </div>
        </FormContainer>
      </FormSide>
    </MainContainer>
  );
};

export default Register;
