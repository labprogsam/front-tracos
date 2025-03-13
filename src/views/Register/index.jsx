import React from "react";
import LogoIcon from "../../assets/Login/logo.svg";
import { Link, useLocation } from "react-router-dom";
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
} from "./styles";

const Register = () => {
  let location = useLocation();

  const onLogin = () => {
    alert(location.pathname);
  };

  const onRegister = () => {
    alert(location.pathname);
  };

  return (
    <MainContainer>
      <ImageSide>
        <div className="image-content">
          <img src={LogoIcon} alt="Logo traços" />
        </div>
      </ImageSide>
      <FormSide>
        <FormContainer>
          <h1>Realize o seu cadastro</h1>
          <h2 id="subtitle-main">Não perca oportunidades e inspirações</h2>
          <h2 id="subtitle-normal">Dados de perfil</h2>
          <TextField
            fullWidth
            label="Nome de usuário"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Senha"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Confirmar senha"
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
            Atente-se
            que os recursos só serão liberados após a comprovação da
            certificação profissional
          </SugestionP>
          <h2>Proteção de dados</h2>
          <FormControlLabel
            control={
              <Checkbox
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
            <Button id="entrar" fullWidth onClick={onLogin} variant="contained">
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
