import { signupInputs } from "../utils/formConfig.js";
import { createUser } from "../api/user.js";

import Header from "../components/Header.jsx";
import Link from "../components/Link.jsx";
import AuthForm from "../components/AuthForm.jsx";
import Footer from "../components/Footer.jsx";
const Signup = () => {
  const handleSignUp = (data) => createUser(data);
  return (
    <>
      <Header>
        <Link to="/login" className="primary-link">
          Se connecter
        </Link>
      </Header>
      <main className="signup-main container">
        <h1>Rejoignez MyBudget</h1>
        <p>Prenez le contrôle de vos finances dès aujourd'hui</p>
        <AuthForm
          type="signup"
          onSubmit={handleSignUp}
          inputsData={signupInputs}
          buttonValue="S'inscrire"
        >
          <div className="redirect">
            <p>Déja un compte?</p>
            <Link to="/login">Se connecter</Link>
          </div>
        </AuthForm>
      </main>
      <Footer />
    </>
  );
};

export default Signup;
