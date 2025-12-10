# 🌟 Instituto Alma – Frontend
Website institucional e painel administrativo desenvolvido para o **Instituto Alma**, uma ONG dedicada a ações sociais, apoio a gestantes, doação de cestas básicas e projetos comunitários.  

Este repositório contém o **frontend em React + Vite**, totalmente integrado à API em ASP.NET Core hospedada no Azure.

---

## 🌐 Deploy
- **Frontend no Vercel:** https://alma-react-hmof.vercel.app  
- **Backend (Swagger):** https://ads2-2025-2-djcbfjadeparacd0.eastus-01.azurewebsites.net/swagger/index.html

---

## 📑 Sumário
- [Funcionalidades](#-funcionalidades)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Fluxo de Navegação](#-fluxo-de-navegação)
- [Autenticação](#-autenticação)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Como Rodar o Projeto Localmente](#-como-rodar-o-projeto-localmente)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Autor](#-autor)

---

## ✨ Funcionalidades

### 🌍 Website Institucional
- Página inicial com informações gerais
- Sobre a ONG
- Transações e ações sociais
- Carrosséis, banners e seções informativas

### 🧾 Transparência
- Listagem de documentos PDF
- Download direto via API
- Upload de PDFs (apenas admin)

### 🫂 Doadores
- Página para cadastro de doadores
- Visualização de campanhas e ações

### 📝 Atividades e Eventos
- Exibição de eventos e atividades públicos
- Upload e edição (admin)
- Suporte a imagens via **multipart/form-data**

### 📣 Ouvidoria
- Envio de mensagens autenticadas
- Área administrativa para leitura

### 🔐 Painel Administrativo
- Login JWT
- Gerenciamento de:
  - Usuários
  - Eventos
  - Atividades
  - Documentos de Transparência
  - Mensagens de Ouvidoria
- Permissões baseadas em **Admin / User**



📂 Estrutura do Projeto
src/
│
├── assets/               # imagens, ícones, PDFs
│
├── components/           # componentes reutilizáveis
│   ├── Button/
│   ├── Carousel/
│   ├── Footer/
│   ├── Header/
│   └── ScrollToTop.jsx
│
├── pages/                # páginas completas
│   ├── Admin/
│   ├── Atividades/
│   ├── Cadastro/
│   ├── Doador/
│   ├── Eventos/
│   ├── Login/
│   ├── Ouvidoria/
│   ├── SobreNos/
│   └── Transparencia/
│
├── App.jsx               # rotas e estrutura geral
└── main.jsx              # renderização principal


Essa divisão segue o padrão recomendado para aplicações React profissionais.


## 🧭 Fluxo de Navegação

### Visitantes (não autenticados):
- Home  
- Sobre Nós  
- Atividades  
- Eventos  
- Transparência  
- Cadastro  
- Login  
- Footer + Header global  

### Usuário autenticado (User):
- Acesso às rotas da API que exigem JWT  
- Envio de ouvidoria  
- Página "Minhas Doações"  

### Administrador:
- Tudo acima +  
- Dashboard Admin  
- CRUD completo de:
  - Usuários  
  - Atividades  
  - Eventos  
  - Transparência (PDF)  
  - Ouvidoria  
- Vistas protegidas no frontend + token no header

---

## 🔐 Autenticação

O Frontend:
- Armazena o JWT no `localStorage`
- Envia automaticamente via:
Authorization: Bearer {token}
- Protege rotas administrativas
- Exibe botões e elementos condicionais com base no papel (`Admin`, `User`)

---

## ⚙️ Tecnologias Utilizadas
### 🖥️ Frontend
- React.js  
- Vite  
- React Hooks  
- React Router  
- Fetch API  

### 🌐 Integração
- API REST .NET Core  
- Autenticação JWT  
- Upload via multipart/form-data  

### 📦 Infra
- Deploy no Vercel  
- Backend hospedado no Azure  

---

## 🚀 Como Rodar o Projeto Localmente

### 1️⃣ Clone o repositório
git clone https://github.com/AndreFerreira30/Alma-React.git
cd meu-projeto

### 2️⃣ Instale as dependências
npm install

### 3️⃣ Rode o projeto
npm run dev

### 4️⃣ Acesse
http://localhost:5173

> ⚠️ O frontend depende do backend rodando na Azure ou localmente.  
Se rodar local, altere a variável `apiUrl` nos componentes/serviços relevantes.

---

## 📦 Scripts Disponíveis

| Comando | Função |
|--------|--------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Gera build de produção |
| `npm run preview` | Previsualiza build local |

---

## 🧑‍💻 Autor

**André Ferreira da Silva**  
Desenvolvedor em formação – ADS  
Foco em backend .NET, React e projetos sociais. 

