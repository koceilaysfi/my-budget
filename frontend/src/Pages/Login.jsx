import { loginInputs } from "../utils/formConfig.js";
import { loginUser } from "../api/user.js";

import Header from "../components/Header.jsx";
import Link from "../components/Link.jsx";
import Footer from "../components/Footer.jsx";
import AuthForm from "../components/AuthForm.jsx";

const Login = () => {
  const handleLogin = (data) => loginUser(data);
  return (
    <>
      <Header>
        <Link to="/signup" className="primary-link">
          S'inscrire
        </Link>
      </Header>
      <main className="login-main container">
        <h1>Connexion</h1>
        <p>Gérez vos finances avec clarté et précision.</p>
        <AuthForm
          type="login"
          inputsData={loginInputs}
          buttonValue="Se connecter"
          onSubmit={handleLogin}
        >
          <div className="redirect">
            <p>Pas encore de compte ?</p>
            <Link to="/signup">S'inscrire</Link>
          </div>
        </AuthForm>
      </main>

      <Footer />
    </>
  );
};

export default Login;
