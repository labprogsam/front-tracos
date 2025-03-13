import React from "react";
import LogoIcon from '../../assets/Login/logo.svg'
import { Link, useLocation } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {
  MainContainer,
	ImageSide,
	FormSide,
	FormContainer
} from './styles';

const Register = () => {
  let location = useLocation();

	const onLogin = () => {
		alert(location.pathname)
	}

	const onRegister = () => {
		alert(location.pathname)
	}

    return (
  <MainContainer>
		<ImageSide>
			<div className="image-content">
				<img src={LogoIcon} alt="Logo traços" />
			</div>
		</ImageSide>
		<FormSide>
			<FormContainer>
				<h1>Boas-vindas</h1>
				<h2>ficamos felizes em te ver aqui novamente</h2>
				<TextField fullWidth label="Email" variant="outlined" margin="normal" />
				<TextField fullWidth label="Senha" variant="outlined" margin="normal" />
				<div id="actions">
					<Button id="entrar" fullWidth onClick={onLogin} variant="contained">Entrar</Button>
					<Link id="register-button" to="/auth/register">
						<Button id="cadastre" fullWidth variant="contained">Crie uma conta</Button>
					</Link>
					<Link to="/auth/forget">Esqueci minha senha</Link>
				</div>
			</FormContainer>
		</FormSide>
	</MainContainer>
)
}

export default Register;
