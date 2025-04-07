# Modelo C4 - Projeto Traços

## Nível 1: Diagrama de Contexto
```mermaid
graph TD
    Cliente((Cliente))
    Tatuador((Tatuador))
    Sistema[Plataforma Traços]

    WhatsApp["WhatsApp (Agendamento)"]
    Render["Render (Hospedagem)"]
    GitHub["GitHub (CI/CD)"]
    PostgreSQL["Banco de Dados PostgreSQL"]

    Cliente -->|Acessa via navegador| Sistema
    Tatuador -->|Acessa via navegador| Sistema

    Sistema --> WhatsApp
    Sistema --> PostgreSQL
    Sistema --> Render
    Sistema --> GitHub
```

## Nível 2: Diagrama de Contêiner

```mermaid
graph TB
    subgraph Cliente
        Browser["Navegador Web"]
    end
    subgraph "Plataforma Traços"
        Front["Front-end (React)"]
        Back["Back-end (Node.js + Express)"]
        DB[(PostgreSQL - Render)]
        CI["GitHub Actions (CI/CD)"]
    end
    subgraph "Sistemas Externos"
        WhatsApp["API WhatsApp"]
        Cloudinary["Cloudinary (Imagens)"]
        RenderHost["Render (Hospedagem)"]
    end
    Browser --> Front
    Front -->|"REST API"| Back
    Back --> DB
    Back -->|"Upload/Download"| Cloudinary
    Back -->|"Gera Link"| WhatsApp
    CI -.->|"Deploy Automático"| RenderHost
    RenderHost --> Back
    RenderHost --> DB
```

## Nível 3: Diagrama de Componentes

### Back-end (Node.js + Express)
```mermaid
graph TD
    Router --> artistInformationsController
    Router --> authController
    Router --> bookingsController
    Router --> customersController
    Router --> imagesController
    Router --> notificationsController
    Router --> reportsController
    Router --> tagsController
    Router --> tattooArtistsController
    Router --> usersController

    AllControllers --> JWTMiddleware["JWT Middleware"]
    AllControllers --> ErrorHandler["Middleware de Erros"]
```

### Front-end (React)
```mermaid
graph TD
    AppRoutes --> Home
    AppRoutes --> Profile
    AppRoutes --> Schedule
    AppRoutes --> Portfolio
    AppRoutes --> Explore

    AuthRoutes --> Login
    AuthRoutes --> Register
    AuthRoutes --> Forget

    views --> Explore
    views --> Forget
    views --> Home
    views --> Login
    views --> Portfolio
    views --> Profile
    views --> Register
    views --> Schedule

    services --> api.js
    services --> login.js
    services --> user.js
```

---

*Este modelo C4 resume a arquitetura do Projeto Traços considerando seus componentes principais e a interação entre usuários e sistemas internos/externos.*

