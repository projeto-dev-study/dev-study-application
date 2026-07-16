<div align="center">

# 📚 DevStudy Application

### Plataforma interativa de estudos e quizzes para desenvolvedores

Aplicação gamificada desenvolvida para testar e aprimorar conhecimentos em tecnologias Front-End (HTML, CSS, JavaScript, React e Git) através de trilhas de aprendizado e quizzes interativos.

<br>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3)

</div>

---

# 📖 Sobre o projeto

O **DevStudy Application** é uma plataforma educacional (Single Page Application) focada no aprendizado de desenvolvimento web. O sistema é dividido em "Unidades" (ex: Unidade I para HTML/CSS/Git, Unidade II para JS, Unidade III para React), permitindo que o usuário avance conforme testa seus conhecimentos.

O grande diferencial técnico deste projeto é o uso intenso da **Context API** do React para o gerenciamento de estados globais (como dados do usuário, controle de fases e progresso nas unidades), além de uma estrutura de rotas bem definida para simular fluxos de login, cadastro, realização de testes e telas de resultados (Aprovação/Reprovação).

---

# ✨ Funcionalidades

- **Sistema de Autenticação:** Telas e fluxos de Login e Cadastro (`Login.jsx`, `Register.jsx`).
- **Trilhas de Conhecimento:** Divisão de estudos por módulos/unidades (HTML/CSS, JavaScript, React).
- **Quizzes Interativos:** Renderização dinâmica de perguntas e validação de respostas.
- **Telas de Feedback:** Redirecionamento condicional baseado no desempenho do usuário (Telas de *Parabéns* ou *Insuficiente*).
- **Gerenciamento de Estado Global:** Utilização nativa do `useContext` para gerenciar informações do usuário e do progresso das fases sem prop drilling.
- **Componentização:** UI construída com componentes granulares (Botões, Caixas de Texto, Navegação).

---

# 🛠️ Tecnologias

## Front-End

- **React.js** (Criado com Vite para maior performance de build)
- **Context API** (Gerenciamento de Estado)
- **JavaScript (ES6+)**
- **CSS3** (Estilização modular e responsiva)

## Ferramentas & Estrutura

- Eslint (Padronização de código)
- Git e GitHub
- NPM / Yarn

---

# 📂 Arquitetura do Projeto

O projeto foi cuidadosamente estruturado para manter a escalabilidade e a separação de responsabilidades:

```text
 ├── public/                # Assets públicos
 ├── src/
 │   ├── assets/            # Imagens, SVGs e ilustrações (organizadas por Unidade)
 │   ├── components/        # Componentes reaproveitáveis (Botoes, Caixa de Texto, Navigation)
 │   ├── contexts/          # Gerenciamento de Estado Global
 │   │   ├── PhaseContext.jsx
 │   │   ├── UnitContext.jsx
 │   │   └── UserContext.jsx
 │   ├── data/              # Dados estáticos (Perguntas dos quizzes e descrições)
 │   ├── pages/             # Telas da aplicação (Home, Login, Quiz, Results, etc.)
 │   ├── App.jsx            # Configuração de Rotas e Providers
 │   └── main.jsx           # Ponto de entrada (Vite)
 ├── eslint.config.js       # Configuração de linting
 └── package.json           # Dependências do projeto
```

---

# 🚀 Como executar localmente

### Pré-requisitos
- Node.js
- NPM ou Yarn

```bash
# Clonar o repositório
git clone https://github.com/edsonplz/dev-study-application.git

# Entrar na pasta do projeto
cd dev-study-application

# Instalar as dependências
npm install

# Iniciar o servidor de desenvolvimento do Vite
npm run dev
```
Acesse `http://localhost:5173` no seu navegador para ver o projeto rodando.

---

# 👨‍💻 Autores

## João Edson

Desenvolvedor Front-End | React • TypeScript • Spring Boot

[LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-edson-b88018333/) | [GitHub](https://github.com/edsonplz) | [Portfólio](https://portfolio-edson.onrender.com/)

---

## Clodomir Alves

Desenvolvedor de Software | JavaScript | ObjectScript | SQL | Html | CSS

[LinkedIn](https://www.linkedin.com/in/clodomiralves/) | [GitHub](https://github.com/clodomiralves)

---

## Leandro Marques

Analista de Dados | Power BI | SQL | Sistemas de Informação

[LinkedIn](https://www.linkedin.com/in/leandro-desenvolvedor/)

---

⭐ Se você gostou deste projeto, deixe uma estrela no repositório!
