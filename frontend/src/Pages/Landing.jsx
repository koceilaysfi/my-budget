import Link from "../components/Link.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Spinner from "../components/Spinner.jsx";

const Landing = () => {
  return (
    <>
      <Header>
        <Link key={0} to="/login" className="secondary-link">
          Se Connecter
        </Link>
        <Link key={1} to="/signup" className="primary-link">
          S'inscrire
        </Link>
      </Header>
      <main className="container landing-main">
        <h1>
          Prenez le contrôle de votre <span>avenir financier</span>
        </h1>
        <p>
          Gérez vos revenus et dépenses simplement. Visualisez votre trajectoire
          et optimisez votre épargne avec MyBudget.
        </p>
        <Link to="/signup" className="primary-link">
          S'inscrire gratuitement
        </Link>
      </main>
      <Footer />
    </>
  );
};

export default Landing;

const links = [];
