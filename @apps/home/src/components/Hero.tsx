import styles from "./Hero.module.scss";

const Hero = () => {
  const heroStyle = {
    backgroundImage: `url(https://loremflickr.com/1920/1080/forest?lock=13)`,
  };

  const onClick = () => {
    const event = new CustomEvent("mfe__navigate", {
      detail: { path: "/catalogue" },
    });
    window.dispatchEvent(event);
  };

  return (
    <div className={styles.hero} style={heroStyle}>
      <h1>Welcome to plant site!</h1>
      <p>For all your plant needs</p>
      <button onClick={onClick}>Browse catalogue</button>
    </div>
  );
};

export default Hero;
