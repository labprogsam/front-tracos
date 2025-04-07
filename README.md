<p align="center">
  <img src="/Documents/Images/logo-tracos.png" alt="Logo Traços" width="200" />
</p>

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/IF977/if977-project-standards.svg)](https://github.com/IF977/if977-project-standards/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/IF977/if977-project-standards.svg)](https://github.com/IF977/if977-project-standards/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

## Índice
- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Documentação](#documentação)
- [Funcionalidades](#funcionalidades)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [FAQ](#faq)
- [Estado do Projeto](#estado-do-projeto)
- [Screenshots](#screenshots)

## Sobre o Projeto
A **Traços** é uma plataforma desenvolvida para facilitar a conexão entre tatuadores e pessoas interessadas em realizar tatuagens. A ideia surgiu ao identificar a dificuldade de encontrar artistas confiáveis, com estilos variados e boa presença digital. O projeto foi idealizado com base em entrevistas com usuários e análise do mercado, visando criar uma experiência segura, prática e intuitiva.

A plataforma oferece um espaço onde tatuadores podem expor seus portfólios e os clientes podem buscar por artistas com base em estilos, localização, disponibilidade e avaliações. Os principais diferenciais incluem o formulário de interesse com fluxo de pré-agendamento, validação de perfis de tatuadores, curadoria de conteúdos e um feed com as últimas atualizações.

## Tecnologias Utilizadas
### Front-End
- **React.js**
- **Styled Components**
- **Material UI tools**
- **Axios**
- **Google Cloud Plataform**
- **Docker**

### Back-End
- **Node.js**
- **Express**
- **Sequelize ORM**
- **Middlewares**
- **Sistema de autenticação com tokens (JWT)**
- **Google Cloud Plataform**
- **Docker**

### Banco de Dados
- **PostgreSQL**
- Modelagem UML
- Tabelas hospedadas online

### Armazenamento de Imagens
- **Cloudinary** (upload, processamento e armazenamento)

### Integração
- O front-end consome o back-end via rotas RESTful

## Documentação
- [Documentação Técnica (Back e Front)](https://docs.google.com/document/d/11KE9-wm2V4x4aKI-znj3iM3o53n2He6Ylcexex9RjmU/edit?tab=t.0)
- [Protótipos no Figma](https://www.figma.com/design/izkpJRY6NBzNHrdDBZe4zf/Projeto-ESS-2024.2?node-id=1-276&p=f&t=T2j0bhM2gLKobj7w-0)
- [User Stories](link-user-stories)
- [Canvas do Projeto](link-canvas)

## Funcionalidades
- Explorar tatuadores e publicações por estilo, localização e técnicas.
- Favoritar artistas e postagens.
- Enviar formulário de interesse para agendamento.
- Contato via WhatsApp após preenchimento do formulário.
- Validação de perfil de tatuadores com envio de documentos no primeiro acesso.
- Atualizações em tempo real via feed personalizado.
- Dashboard para gestão de portfólio, agendamentos e perfil.

### Outros
- **Figma** (Protótipos)
- **Render** (Deploy)

## Instalação

### Pré-requisitos
Você precisa ter o **Yarn** instalado em sua máquina. Para isso, execute:

```bash
npm install -g yarn
```

### Passos para rodar o projeto localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/front-tracos.git
```

2. Instale as dependências:
```bash
yarn install
```

3. Crie um arquivo `.env` na raiz do projeto e copie o seguinte conteúdo:
```env
# Configurações da aplicação
PORT=3001
REACT_APP_MAIN_URL=
```

4. Inicie o projeto localmente:
```bash
yarn start
```

## Contribuição
Contribuições são bem-vindas! Para colaborar:
1. Clone o repositório e crie sua branch a partir de `main`:
```bash
git checkout -b minha-nova-feature
```
2. Faça suas alterações, adicione e commite:
```bash
git commit -m "Minha contribuição"
```
3. Envie para a branch remota e abra um Pull Request.

Leia as diretrizes de contribuição no [CONTRIBUTING.md](CONTRIBUTING.md).

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## FAQ
**Como funciona o agendamento de tatuagens?**
Após preencher um formulário com detalhes da tatuagem desejada, o cliente poderá acessar um botão para contato direto via WhatsApp com o tatuador.

**Tatuadores precisam de validação?**
Sim. No primeiro acesso, tatuadores devem preencher um formulário com documentos e informações para validação de perfil antes de acessar recursos como portfólio e agendamento.

## Estado do Projeto
A plataforma Traços encontra-se em desenvolvimento ativo. Novas funcionalidades estão sendo testadas e integradas continuamente.

## Screenshots
<p align="center">
  <img src="/Documents/Images/prototipo-login.png" alt="Protótipo Login" width="300" />
  <img src="/Documents/Images/home.png" alt="Protótipo Portfólio" width="300" />
  <img src="/Documents/Images/agendamentos.png" alt="Protótipo da Central de Controle dos Agendamentos" width="300" />
</p>

## Equipe do Projeto

<div align="center">

  <table>
    <tr>
      <td align="center">
        <img src="https://avatars.githubusercontent.com/u/104479818?v=4" width="100px" alt="José Luiz"/><br/>
        <b>José Luiz</b>
      </td>
      <td align="center">
        <img src="https://avatars.githubusercontent.com/u/82007092?v=4" width="100px" alt="Juliana Serafim"/><br/>
        <b>Juliana Serafim</b>
      </td>
      <td align="center">
        <img src="https://avatars.githubusercontent.com/u/37546200?v=4" width="100px" alt="Samuel Miranda"/><br/>
        <b>Samuel Miranda</b>
      </td>
      <td align="center">
        <img src="https://avatars.githubusercontent.com/u/49241829?v=4" width="100px" alt="Yasmim Sales"/><br/>
        <b>Yasmim Sales</b>
      </td>
    </tr>
  </table>

</div>

---

<p align="center">
  &copy; 2024 Universidade Federal de Pernambuco - Centro de Informática. Todos os direitos reservados.
</p>
