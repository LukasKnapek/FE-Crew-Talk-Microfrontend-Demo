import useMfeNavigate from "@common/hooks/useMfeNavigate";
import styles from "./Hero.module.scss";

const Hero = () => {
  const navigate = useMfeNavigate();

  const heroStyle = {
    backgroundImage: `url(https://loremflickr.com/1920/1080/forest?lock=13)`,
  };

  return (
    <div className={styles.hero} style={heroStyle}>
      <h1>Welcome to plant site!</h1>
      <p>For all your plant needs</p>
      <button onClick={() => navigate("/catalogue")}>Browse catalogue</button>
    </div>
  );
};

export default Hero;
