// import useTranslation from "hooks/useTranslation";
import LindenLogo from "assets/LindenLogo-removebg.png";

function HomePage() {
  // const [translation] = useTranslation();

  return (
    <>
      <img src={LindenLogo} alt="Linden Home Community Logo" />
      <p>Linden Home Community</p>
      {/* <PageTitle title="Home" /> */}
    </>
  );
}

export default HomePage;
