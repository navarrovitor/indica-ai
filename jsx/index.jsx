import React from 'react';
import './styles/index.css';

const LoginPage = () => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/stylesheets/index.css" />
        <title>Indica Aí</title>
      </head>
      <body>
        <header>
          <img src="/assets/logo.svg" alt="Logo Indica Aí" />
        </header>
        <main>
          <div className="left">
            <h2>indique.</h2>
            <h2>seja indicado.</h2>
            <h2>ache a pessoa certa.</h2>
            <p>Construa uma comunidade mais forte e faça a diferença com o Indica Aí!</p>
          </div>
          <div className="right">
            <h1>FAÇA LOGIN</h1>
            <form action="submit">
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
                <a href="">esqueceu sua senha?</a>
              </div>
              <a id="signin" href="feed.html">
                Entrar
              </a>
              <div className="divider">
                <div className="line"></div>
                <div className="or">or</div>
                <div className="line"></div>
              </div>
              <a id="signup" href="signup.html">
                Cadastre-se
              </a>
            </form>
          </div>
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

export default LoginPage;
