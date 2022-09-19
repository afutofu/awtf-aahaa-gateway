import "../styles/WalkPage.css";
import logo from "../assets/awtf-logo.png";

const WalkPage = () => {
  return (
    <section id="awtf">
      <navbar>
        <img src={logo} alt="A Walk To Freedom" />
      </navbar>
      <div className="container">
        <h3>About Us</h3>
        <p>
          We help support the health, well-being and healing of individuals and
          families by making a diffrerence in the lives of the people we
          interact with each day.
        </p>
      </div>
      <div className="container">
        <h3>Services We Provide</h3>
        <p>Intensive Outpatient</p>
        <p>Relapse Prevention</p>
        <p>Outpatient</p>
        <p>Alcohol, Drug information School</p>
        <p>Aftercare</p>
        <p>Consumer Awareness</p>
        <p>Deferred Prosecution</p>
        <p>Family Law Assessments</p>
        <p>Drug and Alcohol Assessments</p>
        <p>Housing Referrals</p>
        <p>Employment Referrals</p>
        <p>Peer Support</p>
        <p>Crisis Help</p>
        <p>DUI Assessments</p>
      </div>

      <a
        id="awtf-button"
        href="https://awalktofreedom.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Full information and services here
      </a>
    </section>
  );
};

export default WalkPage;
