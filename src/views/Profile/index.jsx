import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Background from '../../assets/Profile/aquarela.png'
import Foto from '../../assets/Profile/tatuador-avatar.png'
import Warning from '../../assets/Profile/exclamation.svg'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputAdornment from "@mui/material/InputAdornment";
import Email from "@mui/icons-material/MailOutline";
import AccountCircle from "@mui/icons-material/AccountCircleOutlined";
import PhoneCallbackOutlined from "@mui/icons-material/LocalPhoneOutlined";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Add from "@mui/icons-material/Add";
import Boy from "@mui/icons-material/Boy";
import Chip from '@mui/material/Chip';
import PriorityHigh from '@mui/icons-material/ErrorOutline';

import {
  MainContainer,
  PhotoContainer,
  RightContainer,
  Container,
  PictureContainer,
  ImageContainer,
  LeftContainer,
  Subtitle,
  Text,
  InputContainer,
  TagArea,
  Textarea,
  CertificationContainer,
  WarningImage
} from "./styles";

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [requiredError, setRequiredError] = useState(false);
  const [tags, setTags] = useState(
    [
      {
        "id": 1,
        "name": "Realismo"
      },
      {
        "id": 2,
        "name": "Pontilhismo"
      },
      {
        "id": 3,
        "name": "Floral"
      },
      {
        "id": 4,
        "name": "Surrealismo"
      },
      {
        "id": 5,
        "name": "Tribal"
      },
      {
        "id": 6,
        "name": "Old School"
      },
      {
        "id": 7,
        "name": "Lettering"
      },
    ]
  )
  const [bio, setBio] = useState(
    "Sou tatuador apaixonado por transformar histórias em arte. Com um estilo único que mistura realismo, geométrico e desenhos personalizados, busco sempre criar tatuagens que sejam mais do que simples desenhos – são expressões da personalidade de cada cliente."
  )
  const [photo,setPhoto] = useState(Foto)
  const [gender, setGender] = useState('nao-informar');

  const handleDelete = (id) => {
    let newTags = tags;
    newTags = newTags.filter((item) => item.id !== id)
    setTags(newTags);
  }

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <MainContainer>
      <h1>Editar perfil</h1>
      <div id="perfil-row">
        <LeftContainer>
          <PhotoContainer>
            <PictureContainer src={Background} alt="background-image" />
            <ImageContainer src={photo} alt="user photo" />
            <Subtitle id="subtitle-photo">Sua foto</Subtitle>
            <Text>Esta será a foto que será exibida em seu perfil</Text>
            <Button
              color="secondary"
              id="new-upload"
              type="submit"
              variant="outlined"
            >
              Novo Upload
            </Button>
            <Button type="submit" id="save-photo" variant="contained">
              Salvar
            </Button>
          </PhotoContainer>

          <Container>
            <Subtitle>Informações Pessoais</Subtitle>
            <InputContainer>
              <TextField
                {...register("email", { required: true })}
                fullWidth
                type="email"
                label="Email"
                size="small"
                variant="outlined"
                margin="normal"
                color="secondary"
                value="som3@cin.ufpe.br"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                {...register("name", { required: true })}
                fullWidth
                label="Nome completo"
                size="small"
                variant="outlined"
                margin="normal"
                color="secondary"
                value="Samuel Oliveira de Miranda"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <div id="gender-phone">
                <TextField
                  {...register("phone", { required: true })}
                  fullWidth
                  label="Telefone"
                  size="small"
                  variant="outlined"
                  margin="normal"
                  color="secondary"
                  value="(81) 996089701"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneCallbackOutlined />
                        </InputAdornment>
                      ),
                    },
                  }}
                />
                <FormControl id="form-gender" fullWidth>
                  <InputLabel id="demo-simple-select-label">Gênero</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="gender-select"
                    value={gender}
                    label="Gênero"
                    onChange={handleChange}
                    startAdornment={
                      <InputAdornment position="start">
                        <Boy />
                      </InputAdornment>
                    }
                  >
                    <MenuItem value={'feminino'}>Feminino</MenuItem>
                    <MenuItem value={'masculino'}>Masculino</MenuItem>
                    <MenuItem value={'nao-binario'}>Não binário</MenuItem>
                    <MenuItem value={'nao-informar'}>Não informar</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Button id="full-button" color="secondary.light" variant="outlined" fullWidth>
                Alterar senha
              </Button>
              <Button id="full-button" color="error" variant="outlined" fullWidth>
                Excluir conta
              </Button>
            </InputContainer>
          </Container>

          <Container>
            <Subtitle>Redes Sociais</Subtitle>
            <InputContainer>
              <TextField
                {...register("instagram", { required: true })}
                fullWidth
                label="Instagram"
                size="small"
                variant="outlined"
                margin="normal"
                color="secondary"
                value="samu_mirandaa"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <Instagram />
                      </InputAdornment>
                    ),
                  },
                }}
              />
              <TextField
                {...register("linkedin", { required: true })}
                fullWidth
                label="Linkedin"
                size="small"
                variant="outlined"
                margin="normal"
                color="secondary"
                value="samu_mirandaa"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LinkedIn />
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </InputContainer>
          </Container>
        </LeftContainer>
        <RightContainer>
          <Container className="no-margin">
            <Subtitle>Bio</Subtitle>
            <Textarea value={bio} />
          </Container>
          <Container>
            <Subtitle>Interesses</Subtitle>
            <TagArea>
              {tags.map((item) => (
                <Chip id="tag-chip" color="secondary.light"  label={item.name} onDelete={() => handleDelete(item.id)} />
              ))}
            </TagArea>
            <Button id="add-button" color="secondary.light" variant="outlined" fullWidth startIcon={<Add />}>
              Add
            </Button>
          </Container>
          <Container >
            <Subtitle>Dados Cadastrais</Subtitle>
            <CertificationContainer>
              <div id="cert-row">
                <WarningImage src={Warning} alt="alert" />
                <p>Você ainda não validou a sua certificação, realize o cadastrado para liberar recursos exclusivos a tatuadores</p>
              </div>
              <Button color="error" id="validation" variant="outlined" fullWidth startIcon={<PriorityHigh />}>
                Iniciar Validação
              </Button>
            </CertificationContainer>
          </Container>
        </RightContainer>
      </div>
    </MainContainer>
  );
};

export default Profile;
