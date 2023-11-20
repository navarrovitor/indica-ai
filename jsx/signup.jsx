import React from "react";
import "./styles/signup.css";

const SignupPage = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/stylesheets/signup.css" />
        <title>Indica Aí</title>
      </head>
      <body>
        <header>
          <div className="left">
            <img src="/assets/logo.svg" alt="Logo Indica Aí" />
            <h1>Indica Aí</h1>
          </div>
          <div className="right"></div>
        </header>
        <main>
          <h1>FAÇA SEU CADASTRO</h1>
          <form action="submit">
            <div className="form-group">
              <label htmlFor="name">Nome completo</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="João Fujão"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="joao.fujao@gmail.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                required
                placeholder="********"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirme Sua Senha</label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                required
                placeholder="********"
              />
            </div>
            <a id="signup">Se cadastre</a>
            <a href="index.html">já tem uma conta? faça login</a>
          </form>
        </main>
        <footer>
          <h3>&copy; 2023 Indica aí.</h3>
          <p>Termos de uso</p>
          <p>Privacidade</p>
          <p>Cookies</p>
        </footer>
      </body>
    </>
  );
};

export default SignupPage;
