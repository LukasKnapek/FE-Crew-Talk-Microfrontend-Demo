import { useState, useEffect } from "react";
import styles from "./Introduction.module.scss";

const Introduction = () => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  useEffect(() => {
    fetch("https://loremflickr.com/400/400/plant?random=1&lock=51").then(
      (response) => setImage1(response.url)
    );
    fetch("https://loremflickr.com/400/400/plant?random=2&lock=50").then(
      (response) => setImage2(response.url)
    );
  }, []);

  return (
    <div className={styles.container}>
      <h2>About us</h2>

      <div className={styles.content}>
        <div className={styles.contentWithImage}>
          <div className={styles.imageContainer}>
            {image1 && <img src={image1} alt="Placeholder image 1" />}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            ipsum ac purus semper malesuada. Fusce imperdiet sapien eu tortor
            volutpat venenatis. Praesent sed efficitur nulla. Nunc imperdiet dui
            et ex aliquet viverra. Nulla facilisi. Sed euismod erat ut felis
            lobortis faucibus. Praesent ut nunc mauris.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentWithImage}>
          <p>
            Curabitur suscipit dolor vitae nibh dapibus, at efficitur purus
            facilisis. Donec sed vestibulum sem. Morbi condimentum sapien vel
            tortor fringilla dapibus. Etiam consequat justo id nisi convallis, a
            vehicula velit molestie. Morbi eget quam eros. Aliquam ultricies
            massa vitae arcu facilisis, at maximus magna dapibus. Phasellus
            dictum faucibus dolor id ornare. Donec sit amet tincidunt nibh.
            Pellentesque sagittis risus et risus dapibus, a lacinia mauris
            consequat. Sed sollicitudin, lorem eu euismod volutpat, ex nisi
            bibendum eros, sit amet aliquam libero purus vel sapien.
          </p>
          <div className={styles.imageContainer}>
            {image2 && <img src={image2} alt="Placeholder image 2" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
